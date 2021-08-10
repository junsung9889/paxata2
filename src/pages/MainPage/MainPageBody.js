import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Table from 'react-bootstrap/Table'
import {useState} from 'react';
import { Link } from 'react-router-dom';

function File({num}){
    return(
        <tr>
            <td>{num}</td>
            <td><Link to = '/export'><Button>Export</Button></Link></td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
        </tr>
    );
}
function FileList({numList}){
    return(
        <tbody>
            {numList.map((num) => <File num = {num}></File>)}
        </tbody>
    );
}

function FileTable({numList}){
    return(
        <div>
            <Table responsive = 'mg' bordered hover className = 'table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                        <th>Table heading</th>
                    </tr>
                </thead>
                <FileList numList = {numList}></FileList>
            </Table>
        </div>
    );
}

export default function MainPageBody(){
    const [num, setNum] = useState(0);
    return(
        <div className = "mainBody">
            <Form className="d-flex searchBar">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button className = "main-btn" variant="success "
                        onClick = {() => setNum(prev => prev + 1)}
                >+</Button>
                <Button className = "main-btn" variant="success">Search</Button>
            </Form>
            <FileTable numList = {[...Array(num).keys()]}></FileTable>
        </div>
    );
}