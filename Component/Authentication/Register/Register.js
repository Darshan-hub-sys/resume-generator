import React from 'react'
import classes from './Register.css';

function Register() {
   let [data,updateData]=React.useState({});

   let [email,pass,phno]=[data.email,data.password,data.phno];

   let [status,updateStatus]=React.useState(false);

   function handler(e){
      updateData({
        ...data,[e.target.name]:e.target.value
      })
   }

   async function submitData(e){
      e.preventDefault();
      const response=await fetch('http://localhost:3002/app/register',{
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
      }
      else
      {
         alert('already data exist')
      }
      console.log(resp)
     // console.log(email,pass,phno);
   }
   return (
      <div>
          <div className={classes.Resume}>
               Resume Builder
         </div>
         <form onSubmit={(e)=>submitData(e)} className={classes.Container}>
         <h2>Register</h2>

         <input required name='email' type='text' placeholder='Email' onInput={(e)=>handler(e)}></input>
         <input required name='password' type='text' placeholder='Password' onInput={(e)=>handler(e)}></input>
         <input required name='phno' type='text' placeholder='Phno' onInput={(e)=>handler(e)}></input>
         <button type='submit' value='submit'>{status?'Registered':'Register'}</button>
         <span>Do you have an account ?</span><button><a href='/'>Login</a></button>
         </form>
      </div>
   )
}

export default Register
