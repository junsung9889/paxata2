import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImportAPI from '../../apis/ImportAPI';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const uploadFile = (fileList) => console.log(fileList)

const FileUploader = props => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <>
            <Button onClick={handleClick}>
                Upload a file
            </Button>
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display: 'none'}}
            />
        </>
    )
};

export default function ImportPageHeader(){
    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const onChange = (e) => {
        setFiles(e.target.files);
        console.log(files);
    }
    const onClick = () => {
        console.log(files);
        ImportAPI(files);
    }

    return(
        <div className='importHeader'>
            <Grid container
                  spacing={3}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center">
                <Grid item>
                    <div className>
                        Import
                    </div>
                </Grid>
                <Grid item>
                    <FileUploader handleFile={uploadFile}/>
                </Grid>
            </Grid>
        </div>
    );
}