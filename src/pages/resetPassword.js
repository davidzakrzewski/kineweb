import React from 'react';
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/constants";
import userService from "../services/userService";


const Style = styled.div`
    height: 100vh;
    
    .form {
        width: 300px;
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

class ResetPassword extends React.Component {

    constructor(props) {
        document.title = 'Réinitialiser le mot de passe';
        super(props);
        this.state = {
            email: '',
            showInfo: false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let res = await userService.resetPassword(this.state.email);
        if (res.success === true) {
            this.setState({
                showInfo: true
            });
        }
        else {
            console.log('error');
        }
    };

    handleClick = () => {
        this.props.history.push('/');
    };

    showInfo = () => {
        if (this.state.showInfo === true) {
            return (
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <Alert variant="info">Un email à été envoyé à l'addresse <b>{this.state.email}</b></Alert>
                    </div>
                    <div>
                        <Button onClick={this.handleClick}>Ok</Button>
                    </div>
                </div>
            )
        }
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    renderForm = () => {
        if (this.state.showInfo === false) {
            return (
                <Row className="form">
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="email">
                                <Form.Label>Adresse Email</Form.Label>
                                <Form.Control type="email" onChange={this.handleChange} placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="d-flex align-content-center" controlId="cancel">
                                <Form.Label className="ml-auto" ><Link to="/">Annuler</Link></Form.Label>
                                <Button className="ml-4" variant="primary" type="submit">
                                    Connexion
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
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
                {this.showInfo()}
                {this.renderForm()}
            </Style>
        );
    }
}

export default ResetPassword;
