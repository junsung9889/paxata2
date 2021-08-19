import { useEffect, useState, useRef } from "react";
import { Table, Offcanvas ,Form, Row, Col, Button, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";
import { getUser, putUser } from "../../apis/UserAPI";

export default function AdminPageBody({users,setUsers}){
    const [user,setUser] = useState({});
    const [userName,setUserName] = useState(user.name);
    const [userEmail,setUserEmail] = useState(user.email);
    const [userPassword,setUserPassword] = useState('');
    const [userRoles,setUserRoles] = useState([]);
    const [retype, setRetype] = useState('');
    const [isSame, setIsSame] = useState(false);
    const roles = ['Automation','RemoteAccess','ResourceAdmin','SuperUser','Admin','PowerUser'];
    const [checkedState, setCheckedState] = useState(new Array(roles.length).fill(false));
    const [show, setShow] = useState(false);
    const [correctPW, setCorrectPW] = useState(false);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        const updatedRoles = roles.filter((role,index)=> updatedCheckedState[index] === true)
        setUserRoles(updatedRoles);
    };
    const handleChecked = (u) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          u.roles.includes(roles[index]) ? true : false
        );
        setCheckedState(updatedCheckedState);
        const updatedRoles = roles.filter((role,index)=> updatedCheckedState[index] === true)
        setUserRoles(updatedRoles);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fetchUsers = async()=>{
        const userData = await getUser();
        setUsers(userData);
    };
    useEffect(()=> fetchUsers(),[]);

    function chkPW(e){
        const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*+=]).{8,}$/;

        if(false === reg.test(e.target.value)) {
            setCorrectPW(false);
        }else {
            setCorrectPW(true);
        }

        if(retype !== e.target.value) {
            setIsSame(false);
        }else {
            setIsSame(true);
        }
    }

    function chkSame(e){
        if(userPassword !== e.target.value) {
            setIsSame(false);
        }else {
            setIsSame(true);
        }
    }

    return(
        <>
            <Table striped bordered hover variant = 'light'
                style = {{width:'98%', margin:'0 auto', marginTop:'20px'}}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Roles</th>
                    <th>Domain</th>
                    <th>Last Login</th>
                    <th>Expiration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u)=>
                        <tr onClick = {async() => {await setUser(u); await handleChecked(u); await handleShow();}}>
                            <td>{u.name}</td>
                            <td>{u.roles.join(', ')}</td>
                            <td>{u.domainName}</td>
                            <td>{u.lastLogin}</td>
                            <td>{u.expiration}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <Offcanvas show={show} onHide={handleClose} placement = 'end'
                style ={{width: '40vw'}}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Edit User</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Row>
                            <Form.Group  className="mb-2">
                                <Form.Label >UserName</Form.Label>
                                <Form.Control size = 'sm' type="text" placeholder={user.name} 
                                    onChange = {(e)=>{setUserName(e.target.value)}}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group  className="mb-2">
                                <Form.Label >Email</Form.Label>
                                <Form.Control size = 'sm' type="text" placeholder={user.email}
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
                            <Form.Group className="mb-3">
                                <Form.Label>Roles</Form.Label>
                                {
                                    roles.map((role,index) => <Form.Check className="mb-1" label = {role}
                                        onChange = {()=>handleOnChange(index)} checked = {checkedState[index]}
                                    />)
                                }
                            </Form.Group>
                        </Row>
                        <Button variant = 'outline-success' style = {{float: 'right'}}
                            onClick = {async() => {await putUser(user.userId,userName,userEmail,userPassword,userRoles);
                                await fetchUsers(); handleClose();}} disabled={!((isSame && correctPW) || (userPassword === '' && retype === ''))}>Edit</Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}