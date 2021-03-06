import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'
import logo from './paxata_logo_icon.png'
import userIcon from './user.png';
import { Link } from 'react-router-dom';

function NavigationBar(){
    const userName = sessionStorage.getItem("name");

    return(
    <Navbar className = "navBar">
        <img src = {logo} alt =''></img>
        <Navbar.Brand href="/main" className = "title text-light">Paxata2</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="/main" className = "text-light">Library</Nav.Link>
            <Nav.Link href="/admin" className = "text-light">Admin</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <div style ={{float: 'right'}}>
            <Link to = '../'>
                <img src = {userIcon} alt ='' className = 'userIcon'></img>
            </Link>
            {userName}
        </div>
    </Navbar>
    );
}

export default NavigationBar;