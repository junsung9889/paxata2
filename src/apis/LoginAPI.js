import axios from "axios";

export default async function LoginAPI({name, password}){

    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let isAuthenticated = false;

    await axios({
        url: '/rest/userinfo',
        method: 'get',
        headers: {
            Authorization: basicAuth,
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