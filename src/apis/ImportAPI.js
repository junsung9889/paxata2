import axios from "axios";

export default async function ImportAPI(files){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    console.log(name);
    console.log(password);
    console.log(credentials);
    const basicAuth = 'Basic ' + credentials;
    for (let file of files){
        var fd = new FormData();
        fd.append('data', file);
        await axios({
            url: '/rest/datasource/imports/local',
            method: 'post',
            headers: {
                'Authorization': basicAuth,
                'Content-Type': 'multipart/form-data',
            },
            data: fd,
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    };
};