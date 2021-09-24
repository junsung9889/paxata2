import axios from "axios";
import fileDownload from 'js-file-download';

export async function getData(dataVersion='*/-1'){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data;
    await axios.get(`/rest/library/data/${dataVersion}`,{
        headers: {
            'Authorization': basicAuth,
        }
    }).then(function(response) {
        data = response.data;
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    });
    return data;
}

export async function getDataWithId(fileId, version=-1){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data1 = null;

    await axios.get(`/rest/library/data/${fileId}/${version}`,{
        headers: {
            'Authorization': basicAuth,
        }
    }).then(function(response) {
        data1 = response.data;
        console.log(response.data);
    }).catch(function(error) {
        console.log(error);
    });

    return data1;
};


export async function exportData(fileId, version, format, options, exportName){
    const name = sessionStorage.getItem("name");
    const password = sessionStorage.getItem("password");
    const credentials = Buffer.from(name + ':' + password).toString('base64');
    const basicAuth = 'Basic ' + credentials;
    let data = null;

    if(format === 'text/csv'){
        exportCsv(basicAuth, fileId, version, options, exportName);
    }
    else{
        exportNormal(basicAuth, fileId, version, format, exportName);
    }

    return data;
};

function exportNormal(auth, fileId, version, format, name){
    let fixedFormat = format;
    fixedFormat = fixedFormat.split('/')[1];
    fixedFormat = fixedFormat.toLowerCase();

    axios({
        url: `/rest/datasource/exports/local/${fileId}/${version}`,
        method: 'post',
        headers: {
            'Authorization': auth,
        },
        params: {
            format: fixedFormat,
        },
    }).then(function(response) {
        console.log(response);
        fileDownload(response.data, name);
    }).catch(function(error) {
        console.log(error);
    });
}

function exportCsv(auth, fileId, version, options, name){
    axios({
        url: `/rest/datasource/exports/local/${fileId}/${version}`,
        method: 'post',
        headers: {
            'Authorization': auth,
        },
        params: {
            format: 'separator',
            includeHeader: options[2],
            lineSeparator: options[1],
            quoteValues: options[3],
            valueSeparator: options[0],
        },
    }).then(function(response) {
        console.log(response);
        fileDownload(response.data, name);
    }).catch(function(error) {
        console.log(error);
    });
}