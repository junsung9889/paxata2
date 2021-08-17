import NavigationBar from "../../components/NavigationBar"
import './ImportPage.scss'
import ImportPageHeader from "./ImportPageHeader"
import ImportPageBody from "./ImportPageBody"
import {useRef, useState} from 'react';


function ImportPage(){
    const [files, setFiles] = useState([]);
    const hiddenFileInput = useRef(null);
    const handleChange = (event) => {
        const fileUploaded = event.target.files;
        setFiles(files => files.concat(Array.from(fileUploaded)));
    };
    
    return(
        <>
            <NavigationBar></NavigationBar>
            <ImportPageHeader fileInput = {hiddenFileInput}></ImportPageHeader>
            <ImportPageBody fileList = {files}></ImportPageBody>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                onClick = {(e) =>{e.target.value = ''}}
                style={{display: 'none'}}
                multiple
            />
        </>
    );
}

export default ImportPage;