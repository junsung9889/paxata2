/* eslint no-restricted-globals: ["off"] */
import {useEffect} from 'react';
import {useState} from 'react';
import {Suspense} from 'react';
import {getDataWithId} from '../../apis/ExportAPI';
import NavigationBar from "../../components/NavigationBar";
import './ExportPage.css';
import ExportPageHeader from './ExportPageHeader';
import ExportPageBody from './ExportPageBody';
import './ExportPage.css';

function ExportPage(){
    const [data,setData] = useState(null);
    async function fetchData(){
        const files = await getDataWithId(location.pathname.split('/')[2]);
        setData(files);
    }
    useEffect(() => {
        fetchData();
    },[]);

    return(
        <div className = 'exportPage'>
            <main>
                {data !== null && data.length !== 0 &&
                <>
                    <NavigationBar></NavigationBar>
                    <ExportPageHeader data={data}></ExportPageHeader>
                    <ExportPageBody data={data}></ExportPageBody>
                </>}
            </main>
        </div>
    );
}

export default ExportPage;