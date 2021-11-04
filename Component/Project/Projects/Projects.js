import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Project from '../Project';
import Context from './../../ContextApi/Context';
import classes from './Project.css';

function Projects() {
   let [projectData,updateProject]=useState([]);
   let [count,updateCount]=useState(1);
   let contextData=React.useContext(Context);
   let [stat,updateStatus]=useState(false);
   let temp=null;
   function counter(){
      updateCount(count+1);
   }
   function projectDetails(params,status){
      updateProject([...projectData,params]);
      temp=status;
   }
   function showProject(context){
      updateStatus(true)
      context.project=[...projectData];
      console.log(contextData);
   }
   return (
      <Context.Consumer>
         {context=><div className={classes.Project}>
            <h1>Project</h1>
            <button className={classes.button} onClick={counter}>Add</button>
         {[...Array(count)].map((_,index)=>{
            return <Project getData={projectDetails} key={index}></Project>
         })}
         <button onClick={()=>showProject(context)} className={classes.save}>{stat?'updated':'Update To Resume'}</button>
         </div>}
      </Context.Consumer>
      
   )
}

export default Projects
