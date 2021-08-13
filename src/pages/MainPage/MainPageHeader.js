import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export default function MainPageHeader(){
    return(
        <div className = "mainHeader">
            <h1 className = 'headerTitle'>DataSet</h1>
            <Link to = '/import'>
                <Button className = "main-btn">Import</Button>
            </Link>
        </div>
    );
}