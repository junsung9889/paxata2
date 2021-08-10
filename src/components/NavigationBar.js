import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'
import logo from './paxata_logo_icon.png'

function NavigationBar(){
    return(
    <Navbar className = "navBar">
        <img src = {logo}></img>
        <Navbar.Brand href="/main" className = "title text-light">Paxata2</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="#action1" className = "text-light">Home</Nav.Link>
            <Nav.Link href="#action2" className = "text-light">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavigationBar;