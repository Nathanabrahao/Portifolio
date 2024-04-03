import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarHeader() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="menu">
                        <Nav.Link className='menu__topics menu__home' href="homePage">Home</Nav.Link>
                        <Nav.Link className='menu__topics menu__aboutMe' href="aboutMe">About me</Nav.Link>
                        <Nav.Link className='menu__topics menu__contact' href="contact">Contact</Nav.Link>
                        <Nav.Link className='menu__topics menu__experience' href='#Experience'>Experience</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarHeader;