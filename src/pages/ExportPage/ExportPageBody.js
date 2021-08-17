import { Form,Button ,Row, Col} from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'



function SeparatorOptions(props){
    const {options} = props;
    const {setOptions} = props;

    return(
        <>
            <br/>
            <Divider/>
            <br/>
            <Row>
                <Form.Group as={Col} >
                    <Form.Label>Column Separator</Form.Label>
                    <Form.Control size = 'sm' type="text" value={options[0]} style={{maxWidth: 300}}
                                  onChange={event => {
                                      let copiedOpts = options.slice();
                                      copiedOpts[0] = event.target.value;
                                      setOptions(copiedOpts);
                                  }} />

                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label>Row Separator</Form.Label>
                    <Form.Control size = 'sm' type="text" value={options[1]} style={{maxWidth: 300}}
                                  onChange={event => {
                                      let copiedOpts = options.slice();
                                      copiedOpts[1] = event.target.value;
                                      setOptions(copiedOpts);
                                  }} />
                </Form.Group>
            </Row>
            <br/>
            <Row>
                <Grid container justifyContent="space-between" style={{maxWidth: 600}} spacing={3}>
                    <Grid item>
                        <Form.Check size = 'sm' type="checkbox" checked={options[2]} label='Include Header'
                                      onChange={event => {
                                          let copiedOpts = options.slice();
                                          copiedOpts[2] = event.target.checked;
                                          setOptions(copiedOpts);
                                      }} />
                    </Grid>
                    <Grid item>
                        <Form.Check size = 'sm' type="checkbox" checked={options[3]} label='Enclose Cells in Quotes'
                                    onChange={event => {
                                        let copiedOpts = options.slice();
                                        copiedOpts[3] = event.target.checked;
                                        setOptions(copiedOpts);
                                    }} />
                    </Grid>
                    <Grid item>
                        <Form.Check size = 'sm' type="checkbox" checked={options[4]} label='Include Byte Order Mark'
                                    onChange={event => {
                                        let copiedOpts = options.slice();
                                        copiedOpts[4] = event.target.checked;
                                        setOptions(copiedOpts);
                                    }} />
                    </Grid>
                </Grid>
            </Row>

        </>
    );
}

function JsonOptions(props){
    const {options} = props;
    const {setOptions} = props;
    return(
        <>
            <br/>
            <Divider/>
            <br/>

            <Row>
                <Form.Check size = 'sm' type="checkbox" checked={options} label='Include Byte Order Mark' style={{marginLeft: 10}}
                            onChange={event => setOptions(event.target.checked)} />
            </Row>

        </>
    );
}

/*function JMLOptions(props){
    const {options} = props;
    const {setOptions} = props;
    return(
        <>
            <br/>
            <Divider/>
            <br/>

            <Row>
                <Form.Check size = 'sm' type="checkbox" checked={options} label='Include Byte Order Mark' style={{marginLeft: 10}}
                            onChange={event => setOptions(event.target.checked)} />
            </Row>

        </>
    );
}*/

export default function ExportPageBody(props){
    const basicSepOpts = [',', '\\n', true, true, false] /// [ColSep, RowSep, Header, Quotes, ByteOrderMarks]
    const {data} = props;
    const [name, setName] = useState('');
    const [format, setFormat] = useState('text/csv');
    const [encoding, setEncoding] = useState('');
    const [sepOpts, setSepOpts] = useState(basicSepOpts);
    const [jsonOpts, setJsonOpts] = useState(false);
    const [xmlOpts, setXmlOpts] = useState(false);

    function toViewFormat(_format){
        return _format.split('/')[1];
    }
    function toFormat(_viewFormat){
        return 'text/' + _viewFormat;
    }
    function formatName(_format, _name){
        var formatString = ''
        var nameList = _name.split('.');

        if(nameList[0] === ''){
            nameList = data[0].source.name.split('.');
        }

        if(nameList.length > 1){
            nameList.length = nameList.length - 1;
        }
        if(_format==='csv'){
            formatString = 'csv';
        } else if(_format==='Avro'){
            formatString = 'avro';
        } else if(_format==='Excel'){
            formatString = 'xlsx';
        } else if(_format==='Fixed Width'){
            formatString = 'txt';
        } else if(_format==='JSON'){
            formatString = 'json';
        } else if(_format==='XML'){
            formatString = 'xml';
        }
        nameList.push(formatString);
        const newName = nameList.join('.');

        return newName;
    }
    function formatChange(event){
        setFormat(format=>format=toFormat(event.target.value));
        setName(name=>name=formatName(event.target.value, name));
    }
    function handleExportClick(event){
        console.log("다음주에")
        console.log("구현!")
    }

    const viewFormat = toViewFormat(format);

    useEffect(() => {
        setName(name => name=data[0].source.name);
        setFormat(format => format=data[0].source.metadata.mimeType);
        setEncoding(encoding => encoding=data[0].source.options.encoding);
    },[]);

    return(
        <>
            <Paper style={{padding:20, margin:20,}}>
                <Form>
                    <Row>
                        <Form.Group as={Col} >
                            <Form.Label>Format</Form.Label>
                            <Form.Select size = 'sm' value={viewFormat} style={{maxWidth: 300}}
                                         onChange={event=>formatChange(event)}>
                                <option>Avro</option>
                                <option>csv</option>
                                <option>Excel</option>
                                <option>JSON</option>
                                <option>XML</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <br/>
                    <Row>
                        <Form.Group  className="mb-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control size = 'sm' type="text" placeholder="Name of File" value={name} style={{maxWidth: 300}}
                                          onChange={event=>setName(name=>name=event.target.value)} />
                        </Form.Group>
                    </Row>
                    <br/>
                    <Row>
                        <Form.Group as={Col} >
                            <Form.Label>Character Encoding</Form.Label>
                            <Form.Select size = 'sm' value={encoding} style={{maxWidth: 300}}
                                         onChange={event=>setEncoding(encoding=>encoding=event.target.value)}>
                                <option>UTF-8</option>
                                <option>Big5</option>
                                <option>EUC-KR</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    {format==='text/csv' && <SeparatorOptions options={sepOpts} setOptions={setSepOpts} />}
                    {format==='text/JSON' && <JsonOptions options={jsonOpts} setOptions={setJsonOpts} />}
                    {format==='text/XML' && <JsonOptions options={xmlOpts} setOptions={setXmlOpts} />}
                </Form>
            </Paper>
            <div style={{display: 'flex'}}>
                <Button active={true} style={{marginLeft:'auto', marginRight:20}} onClick={handleExportClick}>Export</Button>
            </div>
        </>
    )
}