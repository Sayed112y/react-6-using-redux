import React from "react";
import Issue from "./Issue";


export default class IssueList extends React.Component {

    render() {

        let issueNodes = this.props.issues.map(issue => ( <Issue id={issue.id} name={issue.name} severity={issue.severity}
                                                              status={issue.status}  > </Issue>
        ));
        return (

            <table border = "1" >
            <thead>
            <tr>
            <th> Issue Description </th>  
            <th> Severity </th>
            <th> Status </th>  
            </tr>  
            </thead>  
            <tbody> { issueNodes } </tbody>  
            </table>

        );
    }

}