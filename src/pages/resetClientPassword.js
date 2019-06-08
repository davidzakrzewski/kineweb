import React from 'react';
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/constants";


const Style = styled.div`
    height: 100vh;
    
    .form {
        width: 400px;
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

export default class ResetClientPassword extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Réinitialiser le mot de passe";
        this.clientId = this.props.match.params.id;
        this.state = {
            email: '',
            showInfo: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            showInfo: true
        });
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
                                <Form.Label>Nouveau mot de passe</Form.Label>
                                <Form.Control type="password" onChange={this.handleChange} placeholder="Mot de passe" />
                            </Form.Group>
                            <Form.Group className="d-flex align-content-center" controlId="cancel">
                                <Form.Label className="ml-auto" ><Link to="/">Annuler</Link></Form.Label>
                                <Button className="ml-4" variant="primary" type="submit">
                                    Réinitialiser le mot de passe
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
