import React,{useState} from 'react'
import classes from './Skills/Skill.css';
import {TiTick} from 'react-icons/ti';


function Skill(props) {
   let [data,updateData]=useState({});
   let [status,updateStatus]=useState(false);


   function handler(e){
      updateData({...data,[e.target.name]:e.target.value})
   }

   function sendData(e){
      e.preventDefault()
      updateStatus(true)
      props.getData(data,status);
   }

   return (
      <div>
         <form onSubmit={(e)=>sendData(e)} className={classes.SkillFlex}>
            <input type='text' required onChange={(e)=>handler(e)} name='skillname'></input>
            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
            <input type='radio' value='beginner' onChange={(e)=>handler(e)} name='level'></input><label>Beginner</label>
            <input type='radio' value='intermediate' onChange={(e)=>handler(e)} name='level'></input><label>Intermeidate</label>
            <input type='radio' value='difficult' onChange={(e)=>handler(e)} name='level'></input><label>Difficult</label>
            </div>
           
            {status?(<div style={{display:'flex',fontSize:'18px'}}><p>your data is successfully saved</p><TiTick style={{fontSize:'30px',paddingTop:'0px'}}></TiTick></div>):null}
            <button className={classes.save} type='submit' value='Save'>Save</button>
         </form>
      </div>
   )
}

export default Skill
