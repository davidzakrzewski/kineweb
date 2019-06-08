import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from '../pages/home/home';
import KinenavTop from "../components/kinenav/kinenavTop";
import {Col, Row} from "react-bootstrap";
import KinenavLeft from "../components/kinenav/kinenavLeft";
import Patient from "./patient/patient";

export class Dashboard extends React.Component {

    render() {
        return(
            <>
                <KinenavTop/>
                <Row style={{margin: '0'}}>
                    <Col style={{flex: '0 0 100px', padding: '0'}}>
                        <KinenavLeft/>
                    </Col>
                    <Col>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/dashboard/" component={Home}/>
                            <Route path="/dashboard/home" component={Home}/>
                            <Route path="/dashboard/patient/:id" component={Patient}/>
                            <Redirect to="/"/>
                        </Switch>
                    </Col>
                </Row>
            </>
        );
    }
}
