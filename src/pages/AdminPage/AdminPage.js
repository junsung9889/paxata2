import NavigationBar from "../../components/NavigationBar";
import AdminPageHeader from './AdminPageHeader';
import AdminPageBody from './AdminPageBody';
import "./AdminPage.scss";
import { useState ,useEffect } from "react";
import { getRoles } from "../../apis/RolesAPI";

function AdminPage(){
    const [users,setUsers] = useState([]);
    const [roles,setRoles] = useState([]);

    useEffect(async()=>{
        const roless = await getRoles();
        setRoles([...new Set(roless.map(role => role.name))].sort());
    },[]);

    return(
        <>
            <NavigationBar></NavigationBar>
            <AdminPageHeader roles = {roles} users = {users} setUsers = {setUsers}></AdminPageHeader>
            <AdminPageBody roles = {roles} users = {users} setUsers = {setUsers}></AdminPageBody>
        </>
    );
}

export default AdminPage;