import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ImportAPI from '../../apis/ImportAPI';

export default function ImportPageBody(){
    return(
        <div className = 'importBody'>
            <Form.Group controlId="formFileMultiple" className="mb-3 file-input">
                <Form.Control type="file" multiple />
            </Form.Group>
            <Button onClick = {() => ImportAPI()}>Upload</Button>
        </div>
    );
}