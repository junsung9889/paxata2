import axios from "axios";

export default async function HelloAPI(){
    await axios({
        url: '/back/hello',
        method: 'get',
        headers: {
            'Authorization': 'Bearer '+ sessionStorage.getItem('token'),
        }
    }).then(function(response) {
        console.log(response.data);
    }).catch(function(error) {
        console.log(error.response.data);
    });
}