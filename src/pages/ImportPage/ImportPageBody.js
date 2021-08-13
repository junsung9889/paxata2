import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Panel from './Panel';
import Button from 'react-bootstrap/Button';
import ImportAPI from '../../apis/ImportAPI';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        minHeight: '300px',
        height: '60vh',
        borderRadius: '5px',
        margin :'20px',
    },
    tabs: {
        marginTop: '10px',
        width: '30vw',
        borderRight: `3px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const {fileList} = props;
    const [value, setValue] = useState(0);
    const [fileNames,setFileNames] = useState([]);
    const [fileDescs,setFileDescs] = useState([]);
    
    const updateFileList = () => {
        let names = [];
        let descs = [];
        for(let i = fileNames.length; i < fileList.length ; i++){
            names.push(fileList[i].name);
            descs.push("");
        }
        setFileNames(fileNames.concat(names));
        setFileDescs(fileDescs.concat(descs));
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const onClick = async() => {
        await ImportAPI({fileList,fileNames,fileDescs});
        alert("Import All Complete!!!");
    };

    useEffect(() =>{updateFileList();},[fileList]);

    return (
        <div style = {{display : 'flex', flexDirection: 'column'}}>
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    scrollButtons="off"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    className={classes.tabs}
                >
                {
                    fileNames.map((name,index) => 
                        <Tab label = {name} {...a11yProps(index)} style = {{alignSelf:'center'}}></Tab>
                    )
                }
                </Tabs>
                {
                    fileNames.map((name,index) => 
                    <TabPanel value = {value} index = {index} style ={{width:'100%',overflow:'auto'}}>
                        <Panel fileNames = {fileNames} fileDescs = {fileDescs} setFileNames = {setFileNames} 
                               setFileDescs = {setFileDescs} index = {index} value = {value} setValue = {setValue}
                               fileList = {fileList}>
                        </Panel>
                    </TabPanel>)
                }
            </div>
            <Button style ={{marginLeft:'auto', marginRight: '20px', marginBottom:'10px'}} onClick = {onClick}>
                Import All
            </Button>
        </div>
    );
}