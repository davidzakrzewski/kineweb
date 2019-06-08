import React from 'react';
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import styled from 'styled-components';
import colors from "../styles/constants";
import {Link} from "react-router-dom";
import userService from "../services/userService";

const Style = styled.div`
    height: 100vh;
    
    .form {
        width: 350px;
    }
    
    button {
        background-color: ${colors.green};
        border: none;
    }
    
    button:hover {
        transform: scale(0.98);
        background-color: ${colors.green};
    }
    
    button:focus {
        outline: red !important;    
    }
    
    button:active:focus {
        background-color: ${colors.green} !important;
    }
`;

export class Login extends React.Component {

    constructor(props) {
        super(props);
        document.title = "Connexion";
        this.state = {
            email: '',
            password: '',
            showError: false
        };
    }

    handleSubmit = async (event) => {
        let {email, password} = this.state;
        event.preventDefault();

        // get token
        let res = await userService.login(email, password);
        console.log(res);
        if (res.success === false) {
            this.setState({
                showError: true
            });
            return;
        }
        else {
            this.setState({
                showError: false
            });
        }

        // save it to localStorage
        let me = await userService.me();
        localStorage.setItem('token', me.token);
        this.props.history.push('/')
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    displayError = () => {
        if (this.state.showError === true) {
            return (
                <Alert variant="warning">Mauvais email ou mot de passe.</Alert>
            )
        }
    };

    render() {

        let token = localStorage.getItem('token');
        if (token) {
            this.props.history.push('/');
        }


        return (
            <Style className="d-flex justify-content-center align-items-center">
                <Row className="form">
                    <Col>
                        {this.displayError()}
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Adresse Email</Form.Label>
                                <Form.Control type="email" onChange={this.handleChange} placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" onChange={this.handleChange} placeholder="Mot de passe" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><Link to="/resetPassword">J'ai oublié mon mot de passe</Link></Form.Label>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Connexion
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Style>
        );
    }
}
