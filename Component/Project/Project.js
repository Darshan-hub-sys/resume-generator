import React,{useState} from 'react'
import classes from './Projects/Project.css';
import {TiTick} from 'react-icons/ti'

function Project(props) {

   let [data,updateData]=useState({});
   let [status,updateStatus]=useState(false);
   function saveData(e){
      e.preventDefault();
      updateStatus(!status)
      props.getData(data,status)
      console.log(data)
   }

   function handler(e){
      updateData({...data,[e.target.name]:e.target.value})
   }

  
   return (
      <div>
         <form onSubmit={(e)=>saveData(e)} className={classes.ProjectFlex}>
         <input required type='text' placeholder='Project name' name='projectTitle' onChange={(e)=>handler(e)}>
         </input>
         <input required type='text' placeholder='explanation' name='projectExplanation' onChange={(e)=>handler(e)}></input>
         {status?(<div style={{display:'flex',fontSize:'18px'}}><p>your data is successfully saved</p><TiTick style={{fontSize:'30px',paddingTop:'0px'}}></TiTick></div>):null}

         <button type='submit' className={classes.save}>Save</button>
         </form>
         </div>
   )
}

export default Project
