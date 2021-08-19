import NavigationBar from "../../components/NavigationBar";
import AdminPageHeader from './AdminPageHeader';
import AdminPageBody from './AdminPageBody';
import "./AdminPage.scss";

function AdminPage(){
    return(
        <>
            <NavigationBar></NavigationBar>
            <AdminPageHeader></AdminPageHeader>
            <AdminPageBody></AdminPageBody>
        </>
    );
}

export default AdminPage;