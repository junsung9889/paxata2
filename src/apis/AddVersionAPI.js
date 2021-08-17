import axios from "axios";

export default async function AddVersionAPI({file,fileName,fileDesc,dataFileId}){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    
    const fd = new FormData();
    fd.append('data', file);
    await axios({
        url: `/rest/datasource/imports/local/${dataFileId}?name=${fileName}&description=${fileDesc}`,
        method: 'put',
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