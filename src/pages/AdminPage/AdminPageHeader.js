import Button from 'react-bootstrap/Button'

export default function AdminPageHeader(){
    return(
        <div className = "header">
            <h1 className = 'headerTitle'>Users</h1>
            <Button className = "adminButton">+</Button>
        </div>
    );
}