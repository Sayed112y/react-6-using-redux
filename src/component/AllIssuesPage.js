import React,{Component} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import IssueList from "./IssueList";
import { Link } from 'react-router-dom';
import toastr from'toastr';
import * as IssueActions from '../actions/IssueActions';

class AllIssuesPage extends Component {
    constructor(props) {
        super(props);
         toastr.options.timeOut=1000;
    }

    render() {
        return ( <div>
            <h1> Issues List(Using Redux) </h1>  
            <IssueList issues = { this.props.issues } > </IssueList>
            <br/>
            <Link to = "/addissuepage"> Add Issue </Link> 
                </div >
        );

    }

}

function mapStateToProps(state,ownProps){
    return {
        issues: state.issues
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(IssueActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AllIssuesPage);