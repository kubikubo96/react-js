import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useHistory, useLocation} from "react-router-dom";

class BaseRoute extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}

function Dashboard() {
    let history = useHistory();
    let location = useLocation(); //location.pathname : current url
    function handleClick() {
        history.push("/home");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button type="button" className={"btn btn-info"} onClick={handleClick}>
                Go home
            </button>
        </div>
    );
}

export default BaseRoute;
