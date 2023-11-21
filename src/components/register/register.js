//import React from 'react';
import { React, useState } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 

import { Link,useNavigate } from 'react-router-dom';
import './sytle.css';
import { Button, Container, FormGroup, Form} from "reactstrap";

const Register = () => {
  const initialFormState = {
    firstName: '',
    lastName: '',
    password: '',
    dateOfBirth: '',
    mobileNumber: '',
    email: '',
    courseName : '',
    addressLine: '',
    city: '',
    state: '',
    postalCode: '',
    country:'',
    checkBox:'',
    
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
         <label className="form__label" for="dateOfBirth">Date of Birth </label>
         <input className="form__input" type="text" name="dateOfBirth" id="dateOfBirth" value={group.dateOfBirth || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>
       
         <FormGroup>
         <label className="form__label" for="mobileNumber">Mobile Number </label>
         <input className="form__input" type="text" name="mobileNumber" id="mobileNumber" value={group.mobileNumber || ''} onChange={handleChange} placeholder=""/>
         </FormGroup>
         
       <FormGroup>
       <label className="form__label" for="email">EmailID</label>
       <input className="form__input" type="text" name="email" id="email" value={group.email || ''} onChange={handleChange}  placeholder="xyz@company.com"/>
       </FormGroup>
       <FormGroup>
       <label className="form__label" for="courseName">Course Name</label>
       <input className="form__input" type="text" name="courseName" id="courseName" value={group.courseName || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>
       <FormGroup>
       <label className="form__label" for="addressLine">Address Line 1</label>
       <input className="form__input" type="text" name="addressLine" id="addressLine" value={group.addressLine || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

       <FormGroup>
       <label className="form__label" for="city">City</label>
       <input className="form__input" type="text" name="city" id="city" value={group.city || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

       <FormGroup>
       <label className="form__label" for="postalCode">Postal Code</label>
       <input className="form__input" type="text" name="postalCode" id="postalCode" value={group.postalCode || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

       <FormGroup>
       <label className="form__label" for="state">State</label>
       <input className="form__input" type="text" name="state" id="state" value={group.state || ''} onChange={handleChange}  placeholder=""/>
       </FormGroup>

         <FormGroup>
         <label className="form__label" for="country">Country</label>
         <input className="form__input" name="country" type="text" id="country" value={group.country || ''} onChange={handleChange} placeholder=""/>
         </FormGroup>
         
         <FormGroup>
         <input type="checkbox" id="test1" />
          <label for="test1"></label>I agree to these <a href="#">Terms and Conditions</a>
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