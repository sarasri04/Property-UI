

  // App.js File 
import { React, useState } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 

import { Link,useNavigate } from 'react-router-dom';
import './sytle.css';
import { Button, Container, FormGroup, Form} from "reactstrap";
//import Home from '../homepage/homepage';

const Todolist = () => {
  const initialFormState = {
    taskName: '',
    description: '',
    taskStartDate: '',
    taskEndDate: '',
    totalEffortRequired: 1,
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
	<Form onSubmit={handleSubmit}>
  <center><p>Create TodoList</p></center>
      <FormGroup>
				<label className="form__label" for="taskName">Task Name </label>
				<input className="form__input" type="text" name="taskName" id="taskName" value={group.taskName || ''} onChange={handleChange} placeholder="ex: java"/>
        </FormGroup>
        <FormGroup>
				<label className="form__label" for="description">Description</label>
				<input className="form__input" type="text" name="description" id="description" value={group.description || ''} onChange={handleChange} placeholder=""/>
        </FormGroup>
			<FormGroup>
        <label className="form__label" for="taskStartDate">StartDate </label>
				<input className="form__input" type="text" name="taskStartDate" id="taskStartDate" value={group.taskStartDate || ''} onChange={handleChange}  placeholder=""/>
      </FormGroup>
      
				<FormGroup>
        <label className="form__label" for="taskEndDate">EndDate </label>
				<input className="form__input" type="text" name="taskEndDate" id="taskEndDate" value={group.taskEndDate || ''} onChange={handleChange} placeholder="future date"/>
        </FormGroup>
				
			<FormGroup>
      <label className="form__label" for="taskStatus">Task Status </label>
			<input className="form__input" type="text" name="taskStatus" id="taskStatus" value={group.taskStatus || ''} onChange={handleChange}  placeholder="complete/pending"/>
      </FormGroup>
				
        <FormGroup>
        <label className="form__label" for="totalEffortRequired">Total Effort Required </label>
				<input className="form__input" name="totalEffortRequired" type="number" id="totalEffortRequired" value={group.totalEffortRequired || ''} onChange={handleChange} placeholder="estimated duration"/>
        </FormGroup>
				
        <FormGroup>
      <center>
        <Button class="btn"type="submit">Save</Button>{' '} &nbsp;&nbsp;&nbsp; 
        <Button class="btn" tag={Link} to={{pathname: '/homepage'}}>Cancel</Button>
       
      </center>
			</FormGroup>

			
	
	
  </Form>
      </Container>
       </div> 
  ); 

};

export default Todolist;