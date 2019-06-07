import React from 'react';
import {
    BrowserRouter as Router, Redirect,
    Route, Switch
} from "react-router-dom";
import {Dashboard} from "./pages/dashboard";
import {Login} from "./pages/Login";
import ResetPassword from "./pages/resetPassword";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                />
            )
        }
        />
);

function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/resetPassword" component={ResetPassword}/>
                    <PrivateRoute exact path="/" component={Dashboard}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <Redirect to="/"/>
                </Switch>
        </Router>
    );
}

export default App;
