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

export async function putUser(userId, userName, email, password, roles){
    const name = sessionStorage.getItem("name");
    const pw = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + pw).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data = null;
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
    return data;
}