import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, Button, Dropdown, ButtonGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap' 
import './CustomNavbar.css'
import logo from './assets/logo.png'

class Navigation extends Component {
    render () {
        return (
            <Navbar className="Navbar" collapseOnSelect expand="lg" variant="dark" float="top">
                <Navbar.Brand><img src={logo} alt="" style={{width:100, marginTop: -7}} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                <Nav className="mr-auto">
                    <LinkContainer to="/Home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/People">
                        <Nav.Link>People</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Pricing">
                        <Nav.Link>Pricing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/About">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    

                    <Dropdown as={ButtonGroup} className="lastLink">
                        <LinkContainer to="/Services">
                            <Nav.Link><Button variant="warning"  >Services</Button></Nav.Link>
                        </LinkContainer>
                    <Nav.Link><Dropdown.Toggle split variant="outline-warning" id="dropdown-split-basic"/>     
                    <Dropdown.Menu>
                        <Dropdown.Item hred="#/action-1">Frank Staltari</Dropdown.Item>
                        <Dropdown.Item hred="#/action-2">Shelly</Dropdown.Item>
                        <Dropdown.Item hred="#/action-3">Someone else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Nav.Link>
                    </Dropdown>
                    <Form inline className="search">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navigation