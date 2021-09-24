import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginAPI from "../../apis/LoginAPI";
import "./LoginPage.css";
import { useHistory} from "react-router-dom";

export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }
  async function checkLogin(){
    const isAuthenticated: Boolean = await LoginAPI({name,password});
    if(isAuthenticated)
      history.push('./main');
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className = 'password'>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" disabled={!validateForm()} className = 'loginButton'
                onClick = {() => {checkLogin()}}>
            Login
        </Button>
      </Form>
    </div>
  );
}