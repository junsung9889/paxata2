import { useState } from "react";
import { Form,Button ,Row, Col} from "react-bootstrap";

export default function Panel({fileNames, fileDescs, setFileNames, setFileDescs, index, value, setValue,fileList}){
    const [name,setName] = useState(fileNames[index]);
    const [desc,setDesc] = useState(fileDescs[index]);
    return(
        <Form>
            <Row>
                <Form.Group  className="mb-2">
                    <Form.Label >Name</Form.Label>
                    <Form.Control size = 'sm' type="text" placeholder={name} 
                    onChange = {(e) => setName(e.target.value)}/>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group className="mb-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control size = 'sm' as="textarea" placeholder={desc} 
                    onChange = {(e) => setDesc(e.target.value)}/>
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
                    <Button variant="outline-success" type="button" style ={{float:'right'}}
                        onClick ={()=> {
                            let fileNames2 = fileNames.slice();
                            let fileDescs2 = fileDescs.slice();
                            fileNames2[index] = name;
                            fileDescs2[index] = desc;
                            setFileNames(fileNames2);
                            setFileDescs(fileDescs2);
                        }}>
                        Save Changes
                    </Button>
                    <Button variant="outline-danger" style ={{float:'right', marginRight:'10px'}}
                        onClick = {()=>{
                            let fileNames2 = fileNames.slice();
                            let fileDescs2 = fileDescs.slice();
                            fileNames2.splice(index,1);
                            fileDescs2.splice(index,1);
                            fileList.splice(index,1);
                            setFileNames(fileNames2);
                            setFileDescs(fileDescs2);
                            setValue(value > 0 ? value-1 : 0);
                        }}>
                        Remove
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
}