import React from 'react';

const Login = () => (
    <div>
      <center> Login</center><br></br>
      <center> <label for="userName">UserName</label>
               <input type="text" id="userName" name="userName"/> <br/> <br/>
               <label for="password">Password</label>
               <input type="text" id="password" name="password"/> <br/> <br/>
               <button>Submit</button>
               <p>If you're a first time user, Please <a href="/register">Register</a></p>
        </center> 
        
    </div>
  );

  export default Login;