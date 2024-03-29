import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="menu">
                        <Nav.Link className='menu__topics' href="#home">Home</Nav.Link>
                        <Nav.Link className='menu__topics' href="#aboutMe">About me</Nav.Link>
                        <Nav.Link className='menu__topics' href="#contact">Contact</Nav.Link>
                        <Nav.Link className='menu__topics' href='#Experience'>Experience</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;