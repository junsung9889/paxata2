import NavigationBar from "../components/NavigationBar";
import Form from 'react-bootstrap/Form'

function MainPage(){
    return(
        <div>
            <NavigationBar></NavigationBar>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
        </div>
    );
}

export default MainPage;