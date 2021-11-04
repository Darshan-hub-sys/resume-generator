import React from 'react'
import {Link} from 'react-router-dom';
import classes from './Login.css'
import AuthContext from './../../AuthContext/AuthContext';

function Login() {

   let [data,updateData]=React.useState({});

   let [email,pass,phno]=[data.email,data.password,data.phno];
   let [status,updateStatus]=React.useState(false);


   function handler(e){
      updateData({
        ...data,[e.target.name]:e.target.value
      })
   }

   async function submitData(e,context){
      e.preventDefault();
      const response=await fetch('http://localhost:3002/app/login',{
         method:'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            email,pass,phno
         })
      })
      const resp= await response.json();
      if(resp.status==='ok'){
         updateStatus(true);
         window.location.href='/resume'
         context.authentication=true
      }
      else
      {
         alert('credentials are incorrect')
      }
      console.log(resp)
     // console.log(email,pass,phno);
   }
   return(
     
   <div>      
   <div>
   <div className={classes.Resume}>
         Resume Builder
   </div>
      <form onSubmit={(e,context)=>submitData(e,context)} className={classes.Container}>
         <h2>Login</h2>
         <input required name='email' type='text' placeholder='Email' onInput={(e)=>handler(e)}></input>
         <input required name='password' type='text' placeholder='Password' onInput={(e)=>handler(e)}></input>
         <input required name='phno' type='text' placeholder='Phno' onInput={(e)=>handler(e)}></input>
         <button type='submit' value='submit'>{status?'Logined':'Login'}</button>
         <span>Don't have an account?</span><button><a href='/register'>Register</a></button>
      </form>
   </div>
   </div>
        
     
   )
  
}

export default Login
