import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export default function MainPageHeader(){
    return(
        <div className = "mainHeader">
            DataSet
            <Link to = '/import'>
                <Button className = "btn">Import</Button>
            </Link>
        </div>
    );
}