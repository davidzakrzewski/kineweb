import React from 'react';
import {Button, Col, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import colors, {utils} from "../../styles/constants";

const Styles = styled.div`
    .navbar {
        height: ${utils.navTopHeight};
        box-shadow: 0 0px 8px rgba(0,0,0,0.16);
    }
    
    .navbar-brand {
        width: 100px;
        color: ${colors.green};
        font-size: 1.9em;
        font-weight: bold;
    }
    
    .navbar-brand:hover, .navbar-brand:focus {
        color: ${colors.green};
    }
    
    .form-control {
        border: 1px solid ${colors.green};
    }
    
    .search-btn {
        border: 1px solid ${colors.green};
        background-color: ${colors.green};
    }
    
    .search-btn:active:focus {
        border: 1px solid ${colors.greenHover};
        background-color: ${colors.greenHover};
    }
    
`;

class KinenavTop extends React.Component {

    render() {
        return (
            <Styles>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Kine+</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="mr-auto">
                            <InputGroup className="mr-auto" size="sm">
                                <FormControl
                                    placeholder="Rechercher un patient"
                                    aria-label="Rechercher un patient"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button className="search-btn">
                                        <FontAwesomeIcon icon={faSearch} color="white"/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                        <Nav>
                            <NavDropdown title="David Zakrzewski" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mon compte</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Déconnexion</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }

}

export default KinenavTop;
