import React from "react";
import styles from './../css/Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CodeSlash} from 'react-bootstrap-icons';

export default function Navbarr(){
    return(
        <Navbar expand="sm" className={`${styles.navbar}`}>
            <Container>
                <Navbar.Brand href="/sobre" className={`${styles.navlink}`}><CodeSlash size={32} color="white" className="me-2"/> Vitor Daniel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.customToggle} />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navCollapse}>
                    <Nav className='justify-content-around navbar-collapse'>
                        <Nav.Link href="/" className={`${styles.navlinksHome}`}>Home</Nav.Link>
                        <Nav.Link href="/sobre" className={`${styles.navlinks}`}>Sobre</Nav.Link>
                        <Nav.Link href="/tecnologias" className={`${styles.navlinks}`}>Tecnologias</Nav.Link>
                        <Nav.Link href="/projetos" className={`${styles.navlinks}`}>Projetos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}