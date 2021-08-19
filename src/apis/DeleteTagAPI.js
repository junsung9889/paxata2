import axios from "axios";

export default async function PostTagAPI({tagId}){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data = null;

    await axios({
        url: `/rest/library/tags/${tagId}`,
        method: 'delete',
        headers: {
            'Authorization': basicAuth,
        },
    }).then(function(response) {
        data = response.data;
    }).catch(function(error) {
        console.log(error);
    });
    return data;
}
