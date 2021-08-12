import axios from "axios";

export default function DeleteAPI({dataFileId}){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    console.log(dataFileId);
    axios.delete(`/rest/library/data/${dataFileId}`,{
        headers: {
            'Authorization': basicAuth,
        }
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}