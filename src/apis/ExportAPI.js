import axios from "axios";

export default async function ExportAPI(){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;

    await axios.get('/rest/library/data',{
        headers: {
            'Authorization': basicAuth,
        }
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
}