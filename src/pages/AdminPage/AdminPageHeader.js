import {useState, useEffect } from "react";
import {Offcanvas ,Form, Row, Col, Button} from "react-bootstrap";
import { getUser, postUser } from "../../apis/UserAPI";
import { read_csv, transformData } from "./ReadCSV";



export default function AdminPageHeader({roles, users, setUsers}){
    const [file,setFile] = useState(null);
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [userRoles,setUserRoles] = useState([]);
    
    const [checkedState, setCheckedState] = useState([]);
    useEffect(()=>{
        setCheckedState(new Array(roles.length).fill(false));
    },[]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [retype, setRetype] = useState('');
    const [isSame, setIsSame] = useState(false);
    const [isForm,setIsForm] = useState(true);
    const [correctPW, setCorrectPW] = useState(false);
    const fetchUsers = async()=>{
        setUsers(await getUser());
    };
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        const updatedRoles = roles.filter((role,index)=> updatedCheckedState[index] === true)
        setUserRoles(updatedRoles);
    };
    function chkPW(e){
        const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*+=]).{8,}$/;
        if(false === reg.test(e.target.value)) 
            setCorrectPW(false);
        else
            setCorrectPW(true);
        if(retype !== e.target.value)
            setIsSame(false);
        else
            setIsSame(true);
    }
    function chkSame(e){
        if(userPassword !== e.target.value)
            setIsSame(false);
        else
            setIsSame(true);
    }

    function exportTemplate(roles){
        const csv_string = 'UserName,Email,Password,' + roles.join(',') + '\r\n';
        let downloadLink = document.createElement("a");
        let blob = new Blob([csv_string], { type: "text/csv;charset=utf-8" });
        let url = URL.createObjectURL(blob);
        
        downloadLink.href = url;
        downloadLink.download = "template.csv";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    async function updateAndPost(file){
        const data = await read_csv(file);
        let rt = null;
        try{
            const names = users.map(u => u.name);
            rt = await transformData(data,roles,names);
        }
        catch(e){
            alert(e);
            //handleClose();
            return;
        }
        for (const r of rt){
            const updatedRoles = roles.filter((role,index)=> r[3][index] === true)
            postUser(r[0],r[1],r[2],updatedRoles);
        }
        setTimeout(() => fetchUsers(),500);
        handleClose();
    }
    return(
        <>
            <div className = "header">
                <h1 className = 'headerTitle'>Users</h1>
                <Button className = "adminButton" onClick = {() => {setShow(true); setIsForm(true);}}>+ by Form</Button>
                <Button className = "adminButton" onClick = {()=>{setShow(true); setIsForm(false);}}>+ by File</Button>
                <Button variant = 'warning' className = "adminButton" onClick = {() => {exportTemplate(roles)}}>Download Template</Button>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement = 'end'
                style ={{width: '40vw'}}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Add User</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {  
                        isForm?
                        <Form>
                        <Row>
                            <Form.Group  className="mb-2">
                                <Form.Label >UserName</Form.Label>
                                <Form.Control size = 'sm' type="text"
                                    onChange = {(e)=>{setUserName(e.target.value)}}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group  className="mb-2">
                                <Form.Label >Email</Form.Label>
                                <Form.Control size = 'sm' type="text"
                                    onChange = {(e)=>{setUserEmail(e.target.value)}}/>
                            </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group as={Col} className="mb-3 position-relative">
                                <Form.Label >New Password</Form.Label>
                                <Form.Control size = 'sm' type="password" isInvalid = {userPassword !== '' && !correctPW}
                                              onChange = {(e)=>{setUserPassword(e.target.value); chkPW(e)}}/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    The password must contain at least one number, one lowercase letter, one uppercase letter and one special character (!@#$%^&*+=), and at least 8 characters.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3 position-relative">
                                <Form.Label >Re-type New</Form.Label>
                                <Form.Control size = 'sm' type="password" isInvalid = {retype !== '' && !isSame}
                                              onChange = {(e)=>{setRetype(e.target.value); chkSame(e)}}/>
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Not Same
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" style ={{display:'flex', flexFlow:'row wrap'}}>
                                <Form.Label style ={{width:'100%'}}>Roles</Form.Label>
                                {
                                    roles.map((role,index) => <Form.Check className="mb-1" label = {role}
                                        onChange = {()=>handleOnChange(index)} checked = {checkedState[index]}
                                        style ={{width:'50%'}}/>)
                                }
                            </Form.Group>
                        </Row>
                        <Button variant = 'outline-primary' style = {{float: 'right'}}
                            onClick = {async()=> {await postUser(userName,userEmail,userPassword,userRoles);
                                setTimeout(() => fetchUsers(),500); handleClose();}}
                                disabled={!((isSame && correctPW) || (userPassword === '' && retype === ''))}>Add</Button>
                    </Form>
                        :
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload File</Form.Label>
                                <Form.Control type = "file" onChange = {(e) => {console.log(e.target.files[0]);setFile(e.target.files[0]);}}></Form.Control>
                            </Form.Group>
                            <Button variant = 'outline-primary' style = {{float: 'right'}}
                                onClick = {()=>{updateAndPost(file)}}>Add</Button>
                        </Form>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}