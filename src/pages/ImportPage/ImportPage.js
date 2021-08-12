import NavigationBar from "../../components/NavigationBar"
import './ImportPage.css'
import ImportPageHeader from "./ImportPageHeader"
import ImportPageBody from "./ImportPageBody"
import React, {useState} from 'react';


function ImportPage(){

    const fileList = new FormData();
    const [files, setFiles] = useState(fileList);
    const hiddenFileInput = React.useRef(null);

    const handleChange = event => {
        const fileUploaded = event.target.files;
        for(let file of fileUploaded){
            fileList.append('file', file);
        };
        setFiles(files => fileList);
        console.log(fileList.getAll('file'));
    };
    
    return(
        <>
            <div className = 'importPage'>
                <NavigationBar></NavigationBar>
                <ImportPageHeader fileList={hiddenFileInput}></ImportPageHeader>
                <ImportPageBody fileList={files}></ImportPageBody>
            </div>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
                multiple
            />
        </>
    );
}

export default ImportPage;