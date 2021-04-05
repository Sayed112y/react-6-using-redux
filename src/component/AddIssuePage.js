import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import * as IssueActions from '../actions/IssueActions';
import IssueForm from "./IssueForm";
import {connect} from 'react-redux';
import  { bindActionCreators }  from 'redux';
import toastr from'toastr';

class AddIssuePage extends Component {
    constructor(props) {
        super(props);
        debugger;
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleSubmit(issue) {
        this.props.actions.addIssue(issue)
        .then(()=>toastr.success('Issue added'))
        .catch(error =>{
            alert(error);
        });
        this.props.history.push('/issue');
    }

    render() {
        return (<IssueForm onSave = { this.handleSubmit }/>
        );
    }
}
function mapStateToProps(state,ownProps){
    return {
        issues:state.issues
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(IssueActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddIssuePage));