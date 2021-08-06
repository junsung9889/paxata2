import NavigationBar from "../../components/NavigationBar"
import './ImportPage.css'
import ImportPageHeader from './ImportPageHeader'
import ImportPageBody from './ImportPageBody'

function ImportPage(){
    return(
        <div className = 'importPage'>
            <NavigationBar></NavigationBar>
            <ImportPageHeader></ImportPageHeader>
            <ImportPageBody></ImportPageBody>
        </div>
    );
}

export default ImportPage;