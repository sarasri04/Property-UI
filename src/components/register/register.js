import React from 'react';

const Register = () => (
    <div>
     
      <div>
     <h1><center> Register your Details</center><br></br></h1> 
      <center> <label for="userName">FullName</label>
               <input type="text" id="FullName" name="userName"/> <br/> <br/>
               <label for="password">Password</label>
               <input type="text" id="password" name="password"/> <br/> <br/>
               <label for="password">Date of Birth</label>
               <input type="text" id="DOB" name="DOB"/> <br/> <br/>
               <label for="password">Mobile Number</label>
               <input type="text" id="mobileNumber" name="mobileNumber"/> <br/> <br/>
               <label for="password">EmailId</label>
               <input type="text" id="emailID" name="emailID"/> <br/> <br/>
               <label for="password">Country</label>
               <input type="text" id="country" name="country"/> <br/> <br/>
               <button>Register</button>
              
        </center> 
        
    </div>
    </div>
  );

  export default Register;