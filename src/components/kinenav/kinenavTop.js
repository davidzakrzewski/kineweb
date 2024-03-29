import React from 'react';
import {Button, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import colors, {utils} from "../../styles/constants";
import {Redirect} from "react-router-dom";

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
    constructor(props) {
        super(props);
        this.state = {
            logOut: false
        }
    }

    handleClick = () => {
        localStorage.removeItem('token');
        this.setState({
            logOut: true
        })
    };

    renderLogout = () => {
        if (this.state.logOut === true) {
            return (
                <Redirect to="/"/>
            );
        }
    };

    render() {
        return (
            <Styles>
                {this.renderLogout()}
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/dashboard">Kine+</Navbar.Brand>
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
                                <NavDropdown.Item onClick={this.handleClick}>Déconnexion</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        );
    }

}

export default KinenavTop;
