/* eslint no-restricted-globals: ["off"] */
import {useEffect} from 'react';
import {useState} from 'react';
import {getDataWithId} from '../../apis/ExportAPI';
import NavigationBar from "../../components/NavigationBar";
import './ExportPage.scss';
import ExportPageHeader from './ExportPageHeader';
import ExportPageBody from './ExportPageBody';

function ExportPage(){
    let version = location.pathname.split('/')[3];
    if(version === undefined || version === ''){
        version = -1;
    }
    const [data,setData] = useState(null);
    async function fetchData(){
        const files = await getDataWithId(location.pathname.split('/')[2], version);
        setData(files);
    }
    useEffect(() => {
        fetchData();
    },[]);

    return(
        <>
            {
                data !== null && data.length !== 0 &&
                <>
                    <NavigationBar></NavigationBar>
                    <ExportPageHeader data={data}></ExportPageHeader>
                    <ExportPageBody data={data}></ExportPageBody>
                </>
            }
        </>
    );
}

export default ExportPage;