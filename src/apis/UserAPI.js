import axios from "axios";

export async function getUser(){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data = null;
    await axios.get('/rest/users',{

        headers: {
            'Authorization': basicAuth,
        }
    }).then(function(response) {
        data = response.data;
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    });
    return data;
}

export function putUser(userId, userName, email, password, roles){
    const name = sessionStorage.getItem("name");
    const pw = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + pw).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    const rolesText = roles.join(',');
    let params = {
        userId: userId,
        name: userName,
        email: email,
        roles: rolesText
    }
    if(password !== ''){
        params.password = password;
    }
    axios({
        url: `/rest/users`,
        method: 'put',
        headers: {
            'Authorization': basicAuth,
        },
        params: params,
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}

export function postUser(userName, email, userPassword, roles){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    const rolesText = roles.join(',');
    axios({
        url: `/rest/users`,
        method: 'post',
        headers: {
            'Authorization': basicAuth,
        },
        params: {
            name: userName,
            email: email,
            password: userPassword,
            roles: rolesText,
        },
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}

export function deleteUser(userId){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;

    axios({
        url: `/rest/users/${userId}`,
        method: 'delete',
        headers: {
            'Authorization': basicAuth,
        }
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}