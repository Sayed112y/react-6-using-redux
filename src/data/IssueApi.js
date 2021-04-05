import axios from 'axios';
//import { v4 as uuidv4 } from 'uuid';

export default class IssueApi {
	static getAllIssues() {
		return axios.get("http://localhost:3001/issues")
				.then(res => res.data)
				.catch(error =>{
					throw error
				});
	}

	static saveIssue(issue) {
// Only for simulation purpose		
		if(issue.name.length < 1) {
			return new Promise((resolve, reject) => {				
				setTimeout(() => {
					reject("Issue name must be at least 1 character.");
				}, 1000);
			});
		}
		
		//issue.id = uuidv4();
		return axios.post("https://jsonplaceholder.typicode.com/comments", issue)
				.then(res => res.data);
	}
}
