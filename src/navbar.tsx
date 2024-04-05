import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarHeader() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="menu">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className='menu__topics menu__home' href="homePage">Home</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className='menu__topics menu__aboutMe' href="aboutMe">About me</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className='menu__topics menu__contact' href="contact">Contact</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className='menu__topics menu__experience' href='Experience'>Experience</Nav.Link>
                        </motion.div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarHeader;
