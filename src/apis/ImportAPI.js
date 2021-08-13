import axios from "axios";

export default async function ImportAPI({fileList,fileNames,fileDescs}){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    for (let i = 0; i < fileList.length; i++){
        var fd = new FormData();
        fd.append('data', fileList[i]);
        await axios({
            url: `/rest/datasource/imports/local?name=${fileNames[i]}&description=${fileDescs[i]}`,
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