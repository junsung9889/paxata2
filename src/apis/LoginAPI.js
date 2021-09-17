import axios from "axios";

export default async function LoginAPI({name, password}){

    let isAuthenticated = false;

    await axios({
        url: '/back/login',
        method: 'post',
        params: {
            userName: name,
            password: password
        }
    }).then(function(response) {
        sessionStorage.setItem("name",name);
        sessionStorage.setItem("password",password);
        isAuthenticated = true;
    }).catch(function(error) {
        alert("Login Failed");
    });

    return isAuthenticated;
}