import React from 'react';
import styled from 'styled-components';
import {KineBox} from "../../styles/style";
import {Col, Row} from "react-bootstrap";
import patientService from "../../services/patientService";
import {Link} from "react-router-dom";

const Styles = styled.div`
    margin-bottom: 20px;
    
    .row {
        margin: 0;
    }
    
    .col {
        padding: 0;
    }
    
    .profile_pic {
        width: 80px;
        border-radius: 100%;
        box-shadow: 0 0px 8px rgba(0,0,0,0.16);
    }
    
    .row-patient {
        width: 700px;
    }
    
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Accueil";
    }

    renderCurrentPatient = () => {
        let patient = patientService.getCurrentPatient();
        return (
            <>
                <h1>Patient actuel</h1>
                <Row className="d-flex align-items-center mt-3">
                    <img src={patient.profile_pic} alt="photo_patient" className="profile_pic"/>
                    <Col className="ml-4">
                        <div>
                            Mr.<b> {patient.first_name} {patient.last_name}</b>, {patient.age} ans.
                        </div>
                        <div>
                            N° de sécurité sociale: <b>{patient.secu_sociale}</b>
                        </div>
                        <div>
                            Rééducation: <b>{patient.reeducation_type}</b>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end align-self-end">
                        {/*<Link to={`/dashboard/patient/${patient._id}`}>Accéder à la fiche patient</Link>*/}
                        <Link to="/dashboard/patient/02">Accéder à la fiche patient</Link>
                    </Col>
                </Row>
            </>
        )
    };

    renderNextPatient = () => {
        let patient = patientService.getNextPatient();
        let appointment = patientService.getNextAppointmentByPatientId(patient._id);
        return (
            <>
                <h1>Patient suivant <b>({appointment.time})</b></h1>
                <Row className="d-flex align-items-center mt-3">
                    <img src={patient.profile_pic} alt="photo_patient" className="profile_pic"/>
                    <Col className="ml-4">
                        <div>
                            Mr.<b> {patient.first_name} {patient.last_name}</b>, {patient.age} ans.
                        </div>
                        <div>
                            N° de sécurité sociale: <b>{patient.secu_sociale}</b>
                        </div>
                        <div>
                            Rééducation: <b>{patient.reeducation_type}</b>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-end align-self-end">
                        <Link to={`/dashboard/patient/${patient._id}`}>Accéder à la fiche patient</Link>
                    </Col>
                </Row>
            </>
        )
    };


    RenderRecurrentPatients = () => {
        let Patients = patientService.getPatients();

        return (
            Patients.map((patient, i) => {
                return (
                    <Row key={i}>
                        <Col>
                            {patient.first_name} {patient.last_name.toUpperCase()}
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Link to={`/dashboard/patient/${patient._id}`}>Accéder à la fiche patient</Link>
                        </Col>
                    </Row>
                )
            })
        );
    };

    render() {
        return (
            <Styles>
                {/*<Row className="mt-4">*/}
                {/*    <Col style={{flex: '0 0 500px', display: 'table-cell'}}>*/}
                {/*        <KineBox>*/}
                {/*            <h1>Patients récurrents</h1>*/}
                {/*            {this.RenderRecurrentPatients()}*/}
                {/*        </KineBox>*/}
                {/*    </Col>*/}
                {/*    <Col style={{flex: '0 0 200px', display: 'table-cell'}} className="ml-4">*/}
                {/*        <a href="/">*/}
                {/*            <KineBox style={{height: '100%'}} className="d-flex align-items-center">*/}
                {/*                <Row>*/}
                {/*                    <Col>*/}
                {/*                        <Row className="justify-content-center">*/}
                {/*                            <FontAwesomeIcon icon={faUser} size={"5x"} color={colors.green}/>*/}
                {/*                        </Row>*/}
                {/*                        <Row className="justify-content-center text-center mt-2">*/}
                {/*                            Nouvelle fiche patient*/}
                {/*                        </Row>*/}
                {/*                    </Col>*/}
                {/*                </Row>*/}
                {/*            </KineBox>*/}
                {/*        </a>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row className="mt-4 row-patient">
                    <Col>
                        <KineBox>
                            {this.renderCurrentPatient()}
                        </KineBox>
                    </Col>
                </Row>

                <Row className="mt-4 row-patient">
                    <Col>
                        <KineBox>
                            {this.renderNextPatient()}
                        </KineBox>
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default Home;
