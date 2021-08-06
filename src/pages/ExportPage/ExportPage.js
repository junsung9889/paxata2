import NavigationBar from "../../components/NavigationBar"
import './ExportPage.css'
import ExportPageHeader from './ExportPageHeader'
import ExportPageBody from './ExportPageBody'

function ExportPage(){
    return(
        <div className = 'exportPage'>
            <NavigationBar></NavigationBar>
            <ExportPageHeader></ExportPageHeader>
            <ExportPageBody></ExportPageBody>
        </div>
    );
}

export default ExportPage;