import React from 'react'
import classes from './Footer.css';
import {Link} from 'react-router-dom';
import Context from '../ContextApi/Context';

function Footer() {
   var contextData=React.useContext(Context);

   function reset(context){
     window.location.reload()
     window.location.href='/resume'
   }
   function logout(){
      window.location.href='/'
      alert("you're logged out");
   }
   return (
      <Context.Consumer>
         {(context)=> <div className={classes.CV}>
      <button onClick={()=>reset(context)} className={classes.Button}>Reset CV</button>
      <button  className={classes.Button} onClick={()=>logout()}>LOGOUT</button>
      <button  className={classes.Button}><Link to='/template' style={{color:'white',textDecoration:'none'}}>CHECK CV</Link></button>
   </div>}
      </Context.Consumer>
     
   )
}

export default Footer
