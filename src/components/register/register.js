//import React from 'react';
import { React, useState } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 

import { Link,useNavigate } from 'react-router-dom';
import './sytle.css';
import { Button, Container, FormGroup, Form} from "reactstrap";

const Register = () => {
  const initialFormState = {
    taskName: '',
    description: '',
    taskStartDate: '',
    taskEndDate: '',
    totalEffortRequired: '',
    taskStatus: '',
   
  };
  const [group, setGroup] = useState(initialFormState);
  const navigate = useNavigate();
  
  const handleChange = (event) => {
  const { name, value } = event.target

    setGroup({ ...group, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
console.log(group);

await fetch(`http://localhost:8082/todolist/api/v1/user/add-list`, {
  method:'POST',
  mode: 'cors', 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(group)
 
});
setGroup(initialFormState);
navigate('/homepage');
}
  return(
    <div>
    <Container>
   <Form className="form" onSubmit={handleSubmit}>
   <center><p>Register your Details</p></center>
       <FormGroup>
         <label className="form__label" for="firstName">First Name</label>
         <input className="form__input" type="text" name="firstName" id="firstName" value={group.firstName || ''} onChange={handleChange} placeholder="first name"/>
         </FormGroup>
         <FormGroup>
         <label className="form__label" for="lastName">Last Name</label>
         <input className="form__input" type="text" name="lastName" id="lastName" value={group.lastName || ''} onChange={handleChange} placeholder="last name"/>
         </FormGroup>
         <FormGroup>
         <label className="form__label" for="password">Password</label>
         <input className="form__input" type="text" name="password" id="password" value={group.password || ''} onChange={handleChange} placeholder=""/>
         </FormGroup>
       <FormGroup>
         <label className="form__label" for="date of Birth">Date of Birth </label>
         <input className="form__input" type="text" name="taskStartDate" id="taskStartDate" value={group.taskStartDate || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>
       
         <FormGroup>
         <label className="form__label" for="taskEndDate">Mobile Number </label>
         <input className="form__input" type="text" name="taskEndDate" id="taskEndDate" value={group.taskEndDate || ''} onChange={handleChange} placeholder=""/>
         </FormGroup>
         
       <FormGroup>
       <label className="form__label" for="taskStatus">EmailID</label>
       <input className="form__input" type="text" name="taskStatus" id="taskStatus" value={group.taskStatus || ''} onChange={handleChange}  placeholder="xyz@company.com"/>
       </FormGroup>
         
       <FormGroup>
       <label className="form__label" for="taskStatus">Address Line 1</label>
       <input className="form__input" type="text" name="taskStatus" id="taskStatus" value={group.taskStatus || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

       <FormGroup>
       <label className="form__label" for="taskStatus">City</label>
       <input className="form__input" type="text" name="taskStatus" id="taskStatus" value={group.taskStatus || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

       <FormGroup>
       <label className="form__label" for="taskStatus">Postal Code</label>
       <input className="form__input" type="text" name="taskStatus" id="taskStatus" value={group.taskStatus || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

       <FormGroup>
       <label className="form__label" for="taskStatus">State</label>
       <input className="form__input" type="text" name="taskStatus" id="taskStatus" value={group.taskStatus || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

         <FormGroup>
         <label className="form__label" for="totalEffortRequired">Country</label>
         <input className="form__input" name="totalEffortRequired" type="text" id="totalEffortRequired" value={group.totalEffortRequired || ''} onChange={handleChange} placeholder=""/>
         </FormGroup>
         
         <FormGroup>
       <center>
         <Button className="btn"type="submit">Register</Button>{' '} &nbsp;&nbsp;&nbsp; 
         <Button className="btn" tag={Link} to={{pathname: '/homepage'}}>Cancel</Button>
        
       </center>
       </FormGroup>
   
   </Form>
       </Container>
        </div> 
   ); 
 
  };
  export default Register;