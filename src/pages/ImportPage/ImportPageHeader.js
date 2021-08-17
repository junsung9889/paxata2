import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ImportPageHeader(props){
    const {fileInput} = props
    const handleClick = () => {
        fileInput.current.click();
    };
    return(
        <div className='header'>
            <h1 className = "headerTitle">Import</h1>
            <Button onClick={handleClick} className= 'importButton'>Upload</Button>
        </div>
    );
}