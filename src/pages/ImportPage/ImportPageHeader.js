import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ImportPageHeader(props){
    const {fileList} = props
    const handleClick = event => {
        fileList.current.click();
    };
    return(
        <div className='importHeader'>
            <h1 className = "importHeaderTitle">Import</h1>
            <Button onClick={handleClick} className= 'import-btn'>Upload</Button>
        </div>
    );
}