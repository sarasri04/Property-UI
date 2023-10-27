

import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
//import addlist from './components/todolist/todolist';

const Homepage = () => {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateData, setData] = useState([]);
  //const { triggerPrompt } = usePrompt();

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8082/todolist/api/v1/user/list/all')
      .then(response => response.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
  }, []);

  const update = async (id) => {
    
  await fetch(`http://localhost:8082/todolist/api/v1/user/update?taskId=${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      setData(data);
      
    })
    alert("Todo List updated successfully..."); 
    window.location.reload();  
};

console.log(updateData.message)
 if (loading) {
    return <p>Loading...</p>;
  }

  const groupList = groups.map(group => {
    
    return <tr key={group.id}>
      <td style={{whiteSpace: 'nowrap'}}>{group.taskName}</td>
      <td>{group.description}</td>
      
      <td>{
         new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(new Date(group.taskStartDate))}
      </td>
      <td>{
         new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(new Date(group.taskEndDate))}
      </td>
     
      <td>{group.taskStatus}</td>
      <td>{group.totalEffortRequired}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" onClick={() => update(group.id)}>Update</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  return (
    <div>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to={{pathname: '/todolist'}}>Add Group</Button>
        </div>
        <h3>ToDo List Details</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">TaskName</th>
            <th width="20%">Description</th>
            <th width="20%">StartDate</th>
            <th width="20%">EndDate</th>
            <th width="10%">TaskStatus</th>
            <th width="10%">TotalEffort</th>
            <th width="10%"></th>
          </tr>
          </thead>
          <tbody>
          {groupList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Homepage;