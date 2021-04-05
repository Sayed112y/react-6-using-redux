import React from "react";
import { Link} from 'react-router-dom';

export default class Issue extends React.Component {
     constructor(props) {
        super(props);
         this.state={
             flag:false
         }
         
     }
    
    
        render() {
                const path = `/issue/${this.props.name}`;
                return ( <tr>
                        <td> 
                        
                        <Link to = {path} onClick={this.Selected} > {this.props.name} </Link> 
                        
                        </td>
                        <td> {this.props.severity} </td>  
                        <td> {this.props.status}</td>
                        </tr>
                       );

                }
              }