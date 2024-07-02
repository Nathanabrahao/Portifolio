import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";


function NavBarHeader() {
    const location = useLocation();
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);
    
    return (
        <>
            <Navbar className='menu__top'>
                <Container>
                    <Nav className="menu">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className={`menu__topics menu__home ${activePage === '/homePage' ? 'active' : ''}`} href="homePage">Home</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className={`menu__topics menu__aboutMe ${activePage === '/aboutMe' ? 'active' : ''}`} href="aboutMe">About me</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className={`menu__topics menu__contact ${activePage === '/contact' ? 'active' : ''}`} href="contact">Contact</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className={`menu__topics menu__experience ${activePage === '/Experience' ? 'active' : ''}`} href='Experience'>Jobs</Nav.Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Nav.Link className={`menu__topics menu__projects ${activePage === '/Projects' ? 'active' : ''}`} href='Projects'>All Projects</Nav.Link>
                        </motion.div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarHeader;