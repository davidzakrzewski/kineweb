import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import Home from './pages/home/home';
import KinenavTop from "./components/kinenav/kinenavTop";
import {Col, Row} from "react-bootstrap";
import KinenavLeft from "./components/kinenav/kinenavLeft";
import Patient from "./pages/patient/patient";

function App() {
    return (
        <Router>
            <div>
                <KinenavTop/>
                <Row style={{margin: '0'}}>
                    <Col style={{flex: '0 0 100px', padding: '0'}}>
                        <KinenavLeft/>
                    </Col>
                    <Col>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/patient/:id" component={Patient}/>
                        </Switch>
                    </Col>
                </Row>
            </div>
        </Router>
    );
}

export default App;
