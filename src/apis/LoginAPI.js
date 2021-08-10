import axios from "axios";

export default function LoginAPI({name, password}){
    const credentials = Buffer.from({name} + ':' + {password}).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    axios.post('http://220.220.220.80:8000/rest/userinfo', {
    headers: { 'Authorization': + basicAuth }
    }).then(function(response) {
    console.log('Authenticated');
    }).catch(function(error) {
    console.log('Error on Authentication');
    });
}