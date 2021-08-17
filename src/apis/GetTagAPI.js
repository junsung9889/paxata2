import axios from "axios";

export default async function GetTagAPI({dataFileId}){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data = null;
    await axios.get(`/rest/library/tags?dataFileId=${dataFileId}`,{
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