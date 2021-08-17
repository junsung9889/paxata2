import {Form,FormControl, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {getData} from '../../apis/ExportAPI';
import DeleteAPI from '../../apis/DeleteAPI';
import GetTagAPI from '../../apis/GetTagAPI';
import FilterModal from './FilterModal';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

export default function CollapsibleTable() {
    const [data,setData] = useState([]);
    let inputText = "";

    async function fetchData(){
        const files = await getData();
        setData(files);
    }
    useEffect(() => {
        fetchData();
    },[]);
    
    return (
        <div style={{padding:20}}>
            <div className ='bodyHeader'>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search" style ={{width:'30vw', marginRight:'10px'}}
                    onChange = {(e) => inputText = e.target.value}
                />
                <Button variant="success"
                        onClick = {() => {
                            console.log(data);
                            console.log(inputText);
                            console.log(data.filter((row) => row.name.includes(inputText)));
                            setData(data.filter((row) => row.name.includes(inputText)));
                        }}
                >Search</Button>
                <FilterModal></FilterModal>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow style={{borderBottom: '2px solid'}}>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Version</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right"># of Rows</TableCell>
                            <TableCell align="right">Tags</TableCell>
                            <TableCell align="right">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => 
                            <Row key={row.dataFileId} row={row} />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = useState(false);
        const [tag, setTag] = useState([]);
        const classes = useRowStyles();
        const dataFileId = row.dataFileId;
        //console.log(row)
        async function getTag(){
            const tagData = await GetTagAPI({dataFileId});
            if(Array.isArray(tagData) && tagData.length !== 0){
                setTag(tagData);
            }
        }
        useEffect(()=>{
            getTag();
        },[]);
        async function deleteItem(){
            DeleteAPI({dataFileId});
            await fetchData();
            alert('Data Deleted');
        }
        return (
            <React.Fragment>
                <TableRow className = {classes.root}>
                    <TableCell component="th" scope="row">
                        {row.source.name}
                    </TableCell>
                    <TableCell align="right">{row.source.metadata.mimeType}</TableCell>
                    <TableCell align="right">{row.version}</TableCell>
                    <TableCell align="right">{row.state}</TableCell>
                    <TableCell align="right">{row.rowCount}</TableCell>
                    <TableCell align="right">{
                        tag.map((data) => (
                            <Button key = {data.name} variant = 'info' style ={{marginLeft:'5px'}}>{data.name}</Button>
                        ))
                    }</TableCell>
                    <TableCell align="right">
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box  component={Paper} className = 'details'>
                                <div className = "details-title">Details</div>
                                <Table size="small" aria-label="details">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>CreateTime</TableCell>
                                            <TableCell>{row.createTime}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Size</TableCell>
                                            <TableCell>{row.size}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>TenantName</TableCell>
                                            <TableCell>{row.tenantName}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>UserName</TableCell>
                                            <TableCell>{row.userName}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <div className = 'outer'>
                                    <div className = 'inner'>
                                        <Button variant = 'danger' style = {{marginRight:'10px'}}
                                                onClick ={()=>deleteItem()}>Delete</Button>
                                        <Link to = {`/export/${row.dataFileId}`}>
                                            <Button >Export</Button>
                                        </Link>
                                    </div>
                                </div>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }    
}