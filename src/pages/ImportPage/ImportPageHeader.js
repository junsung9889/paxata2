import React from 'react';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';


const FileUploader = props => {
    const {_fileList} = props
    const handleClick = event => {
        _fileList.current.click();
    };

    return (
        <>
            <Button onClick={handleClick}>
                Upload
            </Button>
        </>
    )
};

export default function ImportPageHeader(props){
    const {fileList} = props

    return(
        <div className={'importHeader'}>
            <Grid container
                  spacing={3}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center">
                <Grid item>
                    <div>
                        Import
                    </div>
                </Grid>
                <Grid item>
                    <FileUploader _fileList={fileList}/>
                </Grid>
            </Grid>
        </div>
    );
}