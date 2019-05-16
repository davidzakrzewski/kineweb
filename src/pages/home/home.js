import React from 'react';
import styled from 'styled-components';
import {KineBox, KineBoxClickable} from "../../styles/style";
import {Col, Container, Nav, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import colors from "../../styles/constants";

const Styles = styled.div`
    margin-bottom: 20px;
    
    .row {
        margin: 0;
    }
`;


const Patients = [
    {
        name: "Antoine DUPLESSIS"
    },
    {
        name: "Anna MONTEAU"
    },
    {
        name: "Erwan LORIEL"
    },
];

function RenderRecurrentPatients() {
    return (
        Patients.map((item, i) => {
            return (
                <Row>
                    <Col style={{padding: '0'}}>
                        {item.name}
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <a href="###">Accéder à la fiche patient</a>
                    </Col>
                </Row>
            )
        })
    );
}

function RenderExercices() {
    return (
        <Row>
            <Col style={{padding: '0'}}>
                Gérard BIENVU
            </Col>
            <Col className="d-flex justify-content-end">
                <a href="###">Accéder à la fiche patient</a>
            </Col>
        </Row>
    );
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Accueil";
    }

    render() {
        return (
            <Styles>
                <Row style={{marginTop: '20px'}}>
                    <Col style={{flex: '0 0 500px', display: 'table-cell'}}>
                        <KineBox>
                            <h1>Patients récurrents</h1>
                            <RenderRecurrentPatients/>
                        </KineBox>
                        <KineBox style={{marginTop: '20px'}}>
                            <h1>Exercices à prescrire</h1>
                            <RenderExercices/>
                        </KineBox>
                    </Col>
                    <Col style={{flex: '0 0 200px', display: 'table-cell'}}>
                        <a href="">
                            <KineBox style={{height: '100%'}} className="d-flex align-items-center">
                                <Row>
                                    <Col>
                                        <Row className="justify-content-center">
                                            <FontAwesomeIcon icon={faUser} size={"5x"} color={colors.green}/>
                                        </Row>
                                        <Row className="justify-content-center text-center mt-2">
                                            Nouvelle fiche patient
                                        </Row>
                                    </Col>
                                </Row>
                            </KineBox>
                        </a>
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default Home;
