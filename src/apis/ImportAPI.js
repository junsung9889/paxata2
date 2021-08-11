import axios from "axios";

export default async function ImportAPI({files}){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    for (let file of files){
        const formData = new FormData();
        formData.append(`@${file.name}`,file);
        await axios({
            url: '/rest/datasource/imports/local',
            method: 'post',
            data: formData,
            headers: {
                'Authorization': basicAuth,
                //'Content-Type': 'multipart/form-data'
            }
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    }
}