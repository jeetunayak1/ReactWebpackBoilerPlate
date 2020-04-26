import React from 'react';
import './App.scss';
import { BrowserRouter, Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';

const App = (props) => {

    const isAuthenticated = true;
    var username = "reactUser";

    const Dashboard = (props) => {
        return (
            <span>Dashboard</span>
        )
    }

    const Contacts = (props) => {
        return (
            <span>Contacts</span>
        )
    }

    const getMoreX = (props) => {
        return (
            <span>getMoreX</span>
        )
    }


    const getMoreY = (props) => {
        return (
            <span>getMoreY</span>
        )
    }


    return (
        <BrowserRouter basename={props.myBaseURL}>
            <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">Bolier Plate</Link>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        {isAuthenticated &&
                            <div>
                                <span className="text-primary text-sm mr-2">{username}</span>
                                <Button variant="danger" size="sm" className="mx-1" onClick={() => logout()}  >Logout</Button>
                            </div>
                        }
                    </li>
                </ul>
            </nav>

            <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="row">
                    {isAuthenticated &&
                        <nav className="bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column" id="sidebarnav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Contacts">Contacts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link dropdown-toggle" data-toggle="collapse" data-target="#More" to="/">More</Link>
                                        <ul className="collapse nav border pl-3" id="More">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/GetMore/GetMoreX">GetMoreX</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/GetMore/GetMoreY">GetMoreY</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    }

                    <main role="main" className={` ${isAuthenticated ? 'main-view' : ''} px-4`}>
                        <div className="pt-3 pb-2 mb-3">
                            <Switch>
                                <Route path="/home" component={Dashboard} />
                                <Route path="/Contacts" component={Contacts} />
                                <Route path="/GetMore/GetMoreX" component={getMoreX} />
                                <Route path="/GetMore/GetMoreY" component={getMoreY} />
                                <Route path="/">
                                    {<Redirect to={"/home"} />}
                                </Route>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </BrowserRouter >
    )

}
export default App;