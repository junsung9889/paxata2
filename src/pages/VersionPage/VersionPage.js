import './VersionPage.scss'
import NavigationBar from "../../components/NavigationBar"
import VersionPageHeader from './VersionPageHeader'
import VersionPageBody from './VersionPageBody'

function VersionPage(){
    return(
        <>
            <NavigationBar></NavigationBar>
            <VersionPageHeader></VersionPageHeader>
            <VersionPageBody></VersionPageBody>
        </>
    );
}

export default VersionPage;