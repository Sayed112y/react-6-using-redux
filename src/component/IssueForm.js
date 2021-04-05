import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';





const IssueForm = ({ errors, touched, isSubmitting }) => ( 
    
 
    <div>
    <h1> Add Issue </h1> 
    <Form>
        <div>
          <label>Description: &nbsp; &nbsp; &nbsp; &nbsp;</label>
        <Field type = "text"
        name = "name"
        placeholder = "Enter Issue Description" /> {
            touched.name && errors.name && < span style = {
                { color: 'red' }
            } > { errors.name } </span>} 
        </div> <br/>
        <div>
        <label>Severity: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <Field as="select" name="severity">
          
          <option value="Minor">Minor</option>
          <option value="Major">Major</option>
          <option value="Critical">Critical</option>
        </Field>
        </div><br/><br/>
        <div>
        <label>Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Field type="radio" value="Open" name="status"/>Open
          <Field type="radio" value="In_Progress" name="status"/>In_Progress
          <Field type="radio" value="Closed" name="status"/>Closed    
        </label>        
        </div>
    
                    <button type = "submit"
                    disabled = { isSubmitting } > Submit </button> 
                    </Form>
                    </div>
                
                      )

                const FormikIssueForm = withFormik({
                    mapPropsToValues({ name, severity, status}) {
                        return {
                            
                            name: name || '',
                            severity: severity || '',
                            status: status || ''

                        }

                    },
                    validationSchema: Yup.object().shape({
                        name: Yup.string().min(3, 'issue desc must be at least 3 characters in length').required('Issue Description is required'),
                        
                    }),
                    handleSubmit(values, { resetForm, setSubmitting, setErrors, props }) {
                        console.log(values);
                        var issues = {};
                        setTimeout(() => {
                            if (values.name === 'God') {
                                setErrors({ name: 'You cannot add God as an issue' })
                            } else {
                                resetForm()
                                issues.name = values.name;
                                issues.severity = values.severity;
                                issues.status = values.status;
                                debugger;
                                props.onSave(issues)

                            }
                            setSubmitting(false);
                        }, 2000);
                    }
                })(IssueForm)

                export default FormikIssueForm