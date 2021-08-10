import axios from "axios";

export default function ImportAPI({name, password}){
    console.log(1);

    axios.post('http://220.220.220.80:8000/library/data',{},{
        auth: {
            username: {name},
            password: {password}
        }
    })
    .then((Response) => {console.log(Response)})
    .catch((Error) => {console.log(Error)});
}