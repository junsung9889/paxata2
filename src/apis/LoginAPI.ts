import axios from "axios";

type User ={
    name : string,
    password : string,
}

export default async function LoginAPI({name, password}: User){

    let isAuthenticated: Boolean = false;

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
        sessionStorage.setItem("token",response.data);
    }).catch(function(error) {
        alert(error.response.data);
    });

    return isAuthenticated;
}