import React,{useState} from 'react';
import Context from './../ContextApi/Context';
import Template1 from '../Templates/Template1';
import {Link} from 'react-router-dom';
import classes from './Objective.css'
import {TiTick} from 'react-icons/ti';


function Objective() {

   let [objective,updateObjective]=useState({});
   let contextData=React.useContext(Context);
   let [status,updateStatus]=useState(false)
   function handler(e){
      updateObjective({
         object:e.target.value
      })
   }

   function showObjective(e,context){
      e.preventDefault()
      updateStatus(true);
      context.objective=[{...objective}]
      console.log(contextData)
   }
   return (
      <Context.Consumer>
         {context=><div >
            <form onSubmit={(e)=>showObjective(e,context)} className={classes.Object}>
            <h1>Objective</h1>
         <input required type='text' onChange={(e)=>handler(e)}></input>
         <button type='submit' className={classes.save}>{status?'Updated':'Update To Resume'}</button>
         {status?(<div style={{display:'flex',fontSize:'18px'}}><p>your data is successfully saved</p><TiTick style={{fontSize:'30px',paddingTop:'0px'}}></TiTick></div>):null}
            </form>
             </div>}
      </Context.Consumer>
   )
}

export default Objective
