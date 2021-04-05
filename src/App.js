import React from "react";
import AllIssuesPage from "./component/AllIssuesPage";
import AddIssuePage from "./component/AddIssuePage";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
import './App.css';
import IssueDetailPage from "./component/IssueDetailPage";



class Links extends React.Component {
    render() {
        return (

            <nav>
            <NavLink activeClassName = "active"
            to = "/">About  </NavLink>   
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <NavLink activeClassName = "active"to = "/issue">   Issues </NavLink>
              </nav >
        );
    }
}
export default class App extends React.Component {

        render() {
            return (

                <Router>
                <div>
                <Links/>
                <Switch>
                <Route path = "/issue/:name"component = {IssueDetailPage}/>   
                <Route path = "/issue"component = {AllIssuesPage}/>   
                <Route path = "/addissuepage"component = {AddIssuePage}/>    
                <Route path = "/"render = {() =><h3> About: This application is used to track the status of the issues raised.  </h3> } />
                <Redirect from = "/about-us"to = "/about"/>
                <Redirect from = "/about-wipro"to = "/about" />
                </Switch>    
               </div> 
                </Router>
                );
            }
        }
