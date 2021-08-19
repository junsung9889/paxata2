import {useState } from "react";
import {Offcanvas ,Form, Row, Col, Button} from "react-bootstrap";

export default function AdminPageHeader({users, setUsers}){
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [userRoles,setUserRoles] = useState([]);
    const roles = ['Automation','RemoteAccess','ResourceAdmin','SuperUser','Admin','PowerUser'];
    const [checkedState, setCheckedState] = useState(new Array(roles.length).fill(false));
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [retype, setRetype] = useState('');
    const [isSame, setIsSame] = useState(false);
    const [correctPW, setCorrectPW] = useState(false);

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
            <div className = "header">
                <h1 className = 'headerTitle'>Users</h1>
                <Button className = "adminButton" onClick = {handleShow}>+</Button>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement = 'end'
                style ={{width: '40vw'}}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Add User</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                            <Form.Group className="mb-3">
                                <Form.Label>Roles</Form.Label>
                                {
                                    roles.map((role,index) => <Form.Check className="mb-1" label = {role}
                                        onChange = {()=>handleOnChange(index)} checked = {checkedState[index]}
                                    />)
                                }
                            </Form.Group>
                        </Row>
                        <Button variant = 'outline-primary' style = {{float: 'right'}}
                            onClick = {handleClose} disabled={!((isSame && correctPW) || (userPassword === '' && retype === ''))}>Add</Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}