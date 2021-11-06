import "./jregister.css"
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from "axios";

function Register() {

  const [username, setUsername ]=useState("")
  const [email, setEmail ]=useState("")
  const [password, setPassword]=useState("") 
const history = useHistory();
  
  
  const submitRegister = () =>{

    axios.post("http://localhost:5000/api/users/register" , {
      username: username, 
      email: email,
      password: password, 
     }).then((response) => {
       console.log(response)
     })
     .then(() => history.push('/Login'))
     }
     

  return (    
<div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    
    <input  type="text" onChange= {(e) =>setUsername(e.target.value)}type="text" name="username" placeholder="Username" />
    <input  type="text" onChange= {(e) =>setEmail(e.target.value)} type="text" name="email" placeholder="E-mail" />
    <input type="text" onChange= {(e) =>setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
   
    <input  onClick={submitRegister} 
    onSubmit={submitRegister} type="submit" name="signup_submit" value="Sign me up" />
  </div>
  
  <div class="right">
    
  </div>
  <div class="or"></div>
</div>

      )
  }

export default Register;