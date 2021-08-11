import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImportAPI from '../../apis/ImportAPI';
import { useState } from 'react';
import ExportAPI from '../../apis/ExportAPI';

export default function ImportPageBody(){
    const [files, setFiles] = useState([]);
    const onChange = (e) => {
        setFiles(e.target.files);
        console.log(files);
    }
    const onClick = () => {
        console.log(files);
        ImportAPI(files);
    }
    return(
        <div className = 'importBody'>
            <Form.Group className="mb-3 file-input">
                <Form.Control type="file" multiple onChange = {onChange}/>
            </Form.Group>
            <Button onClick = {onClick}>Upload</Button>
        </div>
    );
}