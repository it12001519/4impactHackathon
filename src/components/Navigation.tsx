import {PersonCircle, BoxArrowRight} from 'react-bootstrap-icons'
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useSearchParams } from "react-router-dom"

function Navigation(){
    let [searchParams, setSearchParams] = useSearchParams()
    const user = searchParams.get("user")
    return <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/profile">
                    <img src="src/assets/4impact-logo.webp" width="75" height="30" className="d-inline-block align-top" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        <NavDropdown title={user} id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="/profile"><PersonCircle /> Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/"><BoxArrowRight /> Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default Navigation;