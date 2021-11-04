import React,{useState} from 'react'
import Skill from './../Skill'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Context from './../../ContextApi/Context';
import classes from './Skill.css';

function Skills(){

   let [count,updateCounter]=useState(1);
   let [skillData,updateSkillData]=useState([]);
   let contextData=React.useContext(Context);
   let [stat,updateStatus]=useState(false);
   let temp;
   function custom(params,status){
      updateSkillData([...skillData,params])
      temp=status
   }

   function updateCount(){
      updateCounter(count+1);
   }

   function showDetails(context){
      updateStatus(!temp)
      context.skills=[...skillData]
      console.log(contextData);
     // console.log(skillData)
   }
  
      return (
         <Context.Consumer>
            {(context)=>
               <div className={classes.Skill}>
               <h1>Skills</h1>
               <button onClick={updateCount} className={classes.button}>Add</button>

            {[...Array(count)].map((_,index)=>{
               return  <Skill  getData={custom} key={index}></Skill>
            })}   
             <button className={classes.proceed} onClick={()=>showDetails(context)}>{stat?'Updated':'Update To Resume'}</button>

            
         </div>
            }
         </Context.Consumer>
      )
   }


export default Skills
