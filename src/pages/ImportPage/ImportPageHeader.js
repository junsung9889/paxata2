import Form from 'react-bootstrap/Form'

export default function ImportPageHeader(){
    return(
        <div className = 'importHeader'>
            Import
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
        </div>
    );
}