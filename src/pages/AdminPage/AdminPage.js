import NavigationBar from "../../components/NavigationBar";
import AdminPageHeader from './AdminPageHeader';
import AdminPageBody from './AdminPageBody';
import "./AdminPage.scss";
import { useState } from "react";

function AdminPage(){
    const [users,setUsers] = useState([]);
    return(
        <>
            <NavigationBar></NavigationBar>
            <AdminPageHeader users = {users} setUsers = {setUsers}></AdminPageHeader>
            <AdminPageBody users = {users} setUsers = {setUsers}></AdminPageBody>
        </>
    );
}

export default AdminPage;