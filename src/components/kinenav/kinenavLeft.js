import React from 'react';
import {Nav, Row} from "react-bootstrap";
import styled from 'styled-components';
import colors, {utils} from "../../styles/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faHome, faUsers} from "@fortawesome/free-solid-svg-icons";


const Styles = styled.div`
    height: calc(100vh - ${utils.navTopHeight});
    background-color: ${colors.green};
    overflow: hidden;
    
    .nav-link {
        color: white;
        padding: 20px;
    }
    .nav-link:hover {
        background-color: ${colors.greenHover};
    }
`;

class KinenavLeft extends React.Component {

    render() {
        return (
            <Styles>
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/home" className="">
                        <Row className="justify-content-center">
                            <FontAwesomeIcon icon={faHome} size={"2x"}/>
                        </Row>
                        <Row className="justify-content-center">
                            Accueil
                        </Row>
                    </Nav.Link>
                    <Nav.Link eventKey="link-1">
                        <Row className="justify-content-center">
                            <FontAwesomeIcon icon={faUsers} size={"2x"}/>
                        </Row>
                        <Row className="justify-content-center">
                            Patients
                        </Row>
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <Row className="justify-content-center">
                            <FontAwesomeIcon icon={faCalendarAlt} size={"2x"}/>
                        </Row>
                        <Row className="justify-content-center">
                            Planning
                        </Row>
                    </Nav.Link>
                </Nav>
            </Styles>
        );
    }

}

export default KinenavLeft;
