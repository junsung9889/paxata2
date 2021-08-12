import { Form,Button ,Row, Col} from "react-bootstrap";

export default function Panel(){
    return(
        <Form>
            <Row>
                <Form.Group  className="mb-2">
                    <Form.Label >Name</Form.Label>
                    <Form.Control size = 'sm' type="text" placeholder="" />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group className="mb-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control size = 'sm' as="textarea" placeholder="Add description" />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} >
                    <Form.Label>Character Encoding</Form.Label>
                    <Form.Select size = 'sm' defaultValue="UTF-8">
                        <option>UTF-8</option>
                        <option>Big5</option>
                        <option>EUC-KR</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                    <Form.Label >Rows to process for schema</Form.Label>
                    <Form.Control size = 'sm' type="text" placeholder= {1000} />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-2">
                    <Button variant="primary" type="submit" style ={{float:'right'}}>
                        Import
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
}