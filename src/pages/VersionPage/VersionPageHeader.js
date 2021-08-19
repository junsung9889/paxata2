/* eslint no-restricted-globals: ["off"] */

import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

export default function VersionPageHeader(){
    return(
        <div className = "header">
            <h1 className = 'headerTitle'>Versions</h1>
            <Link to = {`/import/${location.pathname.split('/')[2]}`}>
                <Button className = "mainButton">Add Version</Button>
            </Link>
        </div>
    );
}