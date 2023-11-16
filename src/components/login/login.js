
import { React, useState } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 

import { Link,useNavigate } from 'react-router-dom';
import './login.css';
import { Button, Container, FormGroup, Form} from "reactstrap";

const Login = () => {

  const initialFormState = {
    userName: '',
    password: ''   
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

await fetch(`http://localhost:8082/todolist/api/v1/user/login`, {
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
    <div className="form-body">
    <Container>
   <Form className="login_form" onSubmit={handleSubmit}>
  <center><h2>Login Details</h2></center> &nbsp;&nbsp;&nbsp; 
       <FormGroup>
         <label className="form__label" for="userName">UserName</label>
         <input className="form__input" type="text" name="userName" id="userName" value={group.userName || ''} onChange={handleChange} placeholder="userName/emailID"/>
         </FormGroup>
         <FormGroup>
         <label className="form__label" for="password">Password (8 characters minimum)</label>
         <input className="form__input" type="password" name="password" id="password" maxLength="12" value={group.password || ''} onChange={handleChange} placeholder=""/>
         </FormGroup>
         <FormGroup>
        <center>
        <Button className="btn"type="submit">Login</Button>{' '} &nbsp;&nbsp;&nbsp; 
        <Button className="btn" tag={Link} to={{pathname: '/homepage'}}>Cancel</Button>
        </center>
        
       </FormGroup>
       <p>If you're a first time user, Please <a href="/register">Register</a></p>

   </Form>
       </Container>
        </div> 
   ); 
 
  };
  export default Login;