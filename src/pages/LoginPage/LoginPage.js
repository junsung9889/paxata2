import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginAPI from "../../apis/LoginAPI";
import "./LoginPage.css";
import { useHistory} from "react-router-dom";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [auth, setAuth] = useState('false');

  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function checkLogin(){
    console.log(1);
    LoginAPI({name,password});
    //history.push('./main');
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className = 'password'>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button size="mg" type="submit" disabled={!validateForm()} className = 'loginButton'
                onClick = {() => {checkLogin()}}>
            Login
        </Button>
      </Form>
    </div>
  );
}