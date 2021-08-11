import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import {useState} from 'react';
import { Link } from 'react-router-dom';

import React from 'react';
import PropTypes from 'prop-types';
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
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const test_api = [
    {
        "dataFileId": "042e7c1a13914d249522d048cc74bb35",
        "version": 1,
        "tenantId": "110a852625664063bc2f07033f628230",
        "tenantName": "administration",
        "userId": "c80e155b86df4d36bb85a8f5e2b88e10",
        "userName": "superuser",
        "createTime": "2021-08-05 14:41:49 KST",
        "finishTime": "2021-08-05 14:43:57 KST",
        "source": {
            "type": "File",
            "name": "pokemon.csv",
            "metadata": {
                "name": "pokemon.csv",
                "mimeType": "text/csv",
                "format": null,
                "encoding": null,
                "size": 35003
            },
            "compressionType": "None",
            "options": {
                "numLinesForSchema": 1000,
                "delimitersCloseQuotes": false,
                "headerLines": 1,
                "stripTypographicQuotes": false,
                "skipDataLines": 0,
                "recordSeparator": "\\n",
                "processQuotes": true,
                "separator": ",",
                "parseTextToNumbers": true,
                "readEntireFileForSchema": false,
                "encoding": "UTF-8",
                "dropRowsFromEachItem": false,
                "addAdditionalColumns": true,
                "headerSeparator": ",",
                "escapeCharacter": "",
                "importLineage": false,
                "type": "Separator",
                "recordSeparatorType": "TEXT",
                "storeBlankRows": true,
                "limit": null,
                "ignoreLines": 0,
                "valueSeparatorType": "TEXT"
            },
            "version": null
        },
        "size": 18082,
        "name": "pokemon.csv",
        "description": "",
        "rowCount": 1045,
        "columnCount": 8,
        "schema": [
            {
                "name": "Name",
                "orignalColumnName": "Name",
                "type": "String",
                "maxSize": 17,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Total",
                "orignalColumnName": "Total",
                "type": "Number",
                "maxSize": 4,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "HP",
                "orignalColumnName": "HP",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Attack",
                "orignalColumnName": "Attack",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Defence",
                "orignalColumnName": "Defence",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Sp_attack",
                "orignalColumnName": "Sp_attack",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Sp_defence",
                "orignalColumnName": "Sp_defence",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Speed",
                "orignalColumnName": "Speed",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            }
        ],
        "importLog": [],
        "state": "DONE",
        "path": "library/110a852625664063bc2f07033f628230/c80e155b86df4d36bb85a8f5e2b88e10/042e7c1a13914d249522d048cc74bb35/1771f8fc6c564a42a434dd878d9d5770",
        "runId": null,
        "dataFileLinkToId": null,
        "dataFileLinkFromId": null,
        "dataFileLinkFromVersion": null,
        "isBufferReady": "[N/A]"
    },
    {
        "dataFileId": "796ee20e018448c69dd8456ad5bc681f",
        "version": 1,
        "tenantId": "110a852625664063bc2f07033f628230",
        "tenantName": "administration",
        "userId": "c80e155b86df4d36bb85a8f5e2b88e10",
        "userName": "superuser",
        "createTime": "2021-08-05 14:41:49 KST",
        "finishTime": "2021-08-05 14:43:57 KST",
        "source": {
            "type": "File",
            "name": "pokemon_df.csv",
            "metadata": {
                "name": "pokemon_df.csv",
                "mimeType": "text/csv",
                "format": null,
                "encoding": null,
                "size": 34214
            },
            "compressionType": "None",
            "options": {
                "numLinesForSchema": 1000,
                "delimitersCloseQuotes": false,
                "headerLines": 1,
                "stripTypographicQuotes": false,
                "skipDataLines": 0,
                "recordSeparator": "\\n",
                "processQuotes": true,
                "separator": ",",
                "parseTextToNumbers": true,
                "readEntireFileForSchema": false,
                "encoding": "UTF-8",
                "dropRowsFromEachItem": false,
                "addAdditionalColumns": true,
                "headerSeparator": ",",
                "escapeCharacter": "",
                "importLineage": false,
                "type": "Separator",
                "recordSeparatorType": "TEXT",
                "storeBlankRows": true,
                "limit": null,
                "ignoreLines": 0,
                "valueSeparatorType": "TEXT"
            },
            "version": null
        },
        "size": 17685,
        "name": "pokemon_df.csv",
        "description": "",
        "rowCount": 1045,
        "columnCount": 8,
        "schema": [
            {
                "name": "Name",
                "orignalColumnName": "Name",
                "type": "String",
                "maxSize": 12,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Total",
                "orignalColumnName": "Total",
                "type": "Number",
                "maxSize": 4,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "HP",
                "orignalColumnName": "HP",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Attack",
                "orignalColumnName": "Attack",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Defence",
                "orignalColumnName": "Defence",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Sp_attack",
                "orignalColumnName": "Sp_attack",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Sp_defence",
                "orignalColumnName": "Sp_defence",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            },
            {
                "name": "Speed",
                "orignalColumnName": "Speed",
                "type": "Number",
                "maxSize": 3,
                "hidden": false,
                "columnTags": []
            }
        ],
        "importLog": [],
        "state": "DONE",
        "path": "library/110a852625664063bc2f07033f628230/c80e155b86df4d36bb85a8f5e2b88e10/796ee20e018448c69dd8456ad5bc681f/61b39993557c435eb1a94b8cbe582e79",
        "runId": null,
        "dataFileLinkToId": null,
        "dataFileLinkFromId": null,
        "dataFileLinkFromVersion": null,
        "isBufferReady": "[N/A]"
    }
]

const test_tags = [
    {
        "tagId": "21c417d7864d433c91e10534a6b125ce",
        "dataFileId": "796ee20e018448c69dd8456ad5bc681f",
        "version": 1,
        "name": "test_tag",
        "userId": "c80e155b86df4d36bb85a8f5e2b88e10",
        "userName": "superuser",
        "tenantId": "110a852625664063bc2f07033f628230",
        "tenantName": "administration"
    }
]

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


function getTags(tagData, dataFileId) {
    for(var tag in tagData){
        if(tag.dataFileId === dataFileId){
            console.log(dataFileId)
            return tag.name;
        };
    };
}


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell component="th" scope="row">
                    {row.source.name}
                </TableCell>
                <TableCell align="right">{row.source.metadata.mimeType}</TableCell>
                <TableCell align="right">{row.version}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{getTags(test_tags, row.dataFileId)}</TableCell>
                <TableCell align="right">
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1} style={{borderRadius:3, padding:5}} component={Paper}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details
                            </Typography>
                            <Table size="small" aria-label="details">
                                <TableBody>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


export default function CollapsibleTable() {
    return (
        <div style={{padding:20}}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow style={{borderBottom: '2px solid'}}>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Version</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Tags</TableCell>
                            <TableCell align="right">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {test_api.map((row) => (
                            <Row key={row.dataFileId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}