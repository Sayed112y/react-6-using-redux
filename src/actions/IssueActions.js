import IssueApi from '../data/IssueApi';
import * as types from './actionTypes';

export function loadIssuesSuccess(issues) {
    return { type: types.LOAD_ISSUE_SUCCESS, issues};
  }
  
  export function addIssueSuccess(issue) {
    return { type: types.ADD_ISSUE_SUCCESS, issue};
  }
  export function loadIssues() {
    return function(dispatch) {
      return IssueApi.getAllIssues().then(issues => {
        dispatch(loadIssuesSuccess(issues));
      }).catch(error => {
        throw(error);
      });
    };
  }
  
  export function addIssue(issues) {
    return function(dispatch,getState) {
      return IssueApi.saveIssue(issues).then(issue => {
        dispatch(addIssueSuccess(issue));
      }).catch(error => {
        throw(error);
      });
    };
  }