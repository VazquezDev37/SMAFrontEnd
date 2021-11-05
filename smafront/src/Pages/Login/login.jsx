import "./login.css";
import React, {useState} from 'react'
import axios from "axios";

export default function Login() {
  const [email, setEmail ]=useState("")
  const [password, setPassword]=useState("") 
  const [loginStatus, setLoginStatus]=useState("")

  
  const submitLogin = () =>{
    axios.post("http://localhost:5000/api/users/login" , { 
      email: email,
      password: password, 
     }).then((response) =>  {
         if(response.data.message){
           setLoginStatus(response.data.message[0].email)
         }
       
     });
    }
    

  return (
    <div class="wrapper">
  <form class="login" onSubmit={submitLogin}>
    <p class="title">Log in</p>
    <input type="text" type="text" onChange= {(e) =>setEmail(e.target.value)}  placeholder="email" type="email" autofocus />
    <i class="fa fa-user"></i>
    <input type="password" type="text" onChange= {(e) =>setPassword(e.target.value)}  type="password"  placeholder="Password" />
    <i class="fa fa-key"></i>
    <button onClick={submitLogin} className= "loginButton" type="submit">
      <i class="spinner"></i>
      <span class="state">Log in</span>
    </button>
  </form>
  <footer><a target="blank" href="http://boudra.me/">WELCOME TO VET NET</a></footer>
  </div>
  );
}
  