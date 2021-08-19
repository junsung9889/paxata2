import axios from "axios";

export async function getUser(){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data = null;

    await axios.get('/rest/user',{
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


export async function getDataWithId(fileId){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data1 = null;

    await axios.get(`/rest/library/data/${fileId}`,{
        headers: {
            'Authorization': basicAuth,
        }
    }).then(function(response) {
        data1 = response.data;
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    });

    return data1;
};