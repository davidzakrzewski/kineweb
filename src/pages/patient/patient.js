import React from 'react';
import patientService from '../../services/patientService';
import {Col, Row} from "react-bootstrap";
import {KineBox} from "../../styles/style";
import styled from "styled-components";
import {Link} from "react-router-dom";
import colors from "../../styles/constants";

const Styles = styled.div`
    margin-bottom: 20px;
    
    .row {
        margin: 0;
    }
    
    .col {
        padding: 0;
    }
    
    .profile_pic {
        width: 120px;
        box-shadow: 0 0px 8px rgba(0,0,0,0.16);
    }
    
    
    .img-exercice {
        width: 200px;
    }
    
    .row-patient {
        width: 700px;
    }
    
    .back-link {
        color: ${colors.green};
        font-weight: bold;
    }
    
`;


class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.patient = patientService.getPatientsById(this.props.match.params.id);
    }

    renderPatient = () => {
        return (
            <>
                <h1>Patient actuel</h1>
                <Row className="d-flex align-items-center mt-3">
                    <img src={this.patient.profile_pic} alt="photo_patient" className="profile_pic"/>
                    <Col className="ml-4">
                        <div>
                            Mr.<b> {this.patient.first_name} {this.patient.last_name}</b>, {this.patient.age} ans.
                        </div>
                        <div>
                            N° de sécurité sociale: <b>{this.patient.secu_sociale}</b>
                        </div>
                        <div>
                            Rééducation: <b>{this.patient.reeducation_type}</b>
                        </div>
                    </Col>
                </Row>
            </>
        );
    };

    displayExercices = (exercices) => {
        return (exercices.map((item, i) => {
            return (
                <Row key={i}>
                    <Col>
                        <div>
                            <b>{item.nom}</b>
                        </div>
                        <div>
                            {item.description}
                        </div>
                    </Col>
                    <Col>
                        <img className="img-exercice" src={item.url} alt="exercice kinésithérapeute"/>
                    </Col>
                </Row>
            );
        }));
    };

    renderExercices = () => {
        let exercices = patientService.getExericesByPatientId(this.patient._id);
        return (
            <>
                <h1>Exercices prescrits</h1>
                <Row className="d-flex align-items-center mt-3">
                    <Col>
                        {this.displayExercices(exercices.list)}
                    </Col>
                </Row>
            </>
        );
    };

    render() {
        return (
            <Styles>
                <Row className="mt-4 row-patient">
                    <Col>
                        <Link to="/" className="back-link">Retour</Link>
                    </Col>
                </Row>
                <Row className="mt-4 row-patient">
                    <Col>
                        <KineBox>
                            {this.renderPatient()}
                        </KineBox>
                    </Col>
                </Row>

                <Row className="mt-4 row-patient">
                    <Col>
                        <KineBox>
                            {this.renderExercices()}
                        </KineBox>
                    </Col>
                </Row>
            </Styles>
        )
    }
}

export default Patient;
