import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Panel from './Panel';

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
        height: '400px',
        width: '95%',
        margin: '0 auto',
        marginTop:'20px'
    },
    tabs: {
        marginTop: '10px',
        borderRight: `3px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const {fileList} = props;
    console.log(fileList);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }; 
    return (
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
                fileList.map((file,index) => <Tab label = {file.name} {...a11yProps(index)}></Tab>)
            }
            </Tabs>
            {
                fileList.map((file,index) => 
                <TabPanel value = {value} index = {index} style ={{width:'50%'}}>
                    <Panel></Panel>
                </TabPanel>)
            }
        </div>
    );
}