import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Context from '../ContextApi/Context';
import classes from './Education.css';
import {TiTick} from 'react-icons/ti'

function Education() {

   
   let [educationDetails,updateEdu]=React.useState({});
   let contextData=React.useContext(Context);
   let [status,updateStatus]=React.useState(false);
   function execute(e){

      updateEdu({...educationDetails,[e.target.name]:e.target.value})
   }

   function showStatus(e,context){
      e.preventDefault();
      updateStatus(true)
     context.education=[{...educationDetails}]
     console.log(contextData)
   }
      return(
         <Context.Consumer>
            {(context)=> <div>
         <form className={classes.Edu} onSubmit={(e)=>showStatus(e,context)}>
         <h1>Education Details</h1>
         <div>
            <h3>SSLC</h3>
            <input required type='text' name='schoolname' placeholder='school name'  onChange={(e)=>execute(e)}></input>
            <input required  type='text' name='marks' placeholder='marks obtains in number' onChange={(e)=>execute(e)}></input>
         </div>
         <div>
            <h3>PUC</h3>
            <input required  type='text' placeholder='college name' name='collegename'  onChange={(e)=>execute(e)}></input>
            <input required  type='text' placeholder='marks obtains in number' name='marksobtained'   onChange={(e)=>execute(e)}></input>
         </div>
         <div>
            <h3>DEGREE</h3>
            <input required  type='text' placeholder='college name' name='degname'  onChange={(e)=>execute(e)}></input>
            <input required  type='text' placeholder='marks obtains in number' name='degmarks'  onChange={(e)=>execute(e)}></input>
         </div>
         <div style={{display:'flex',flexDirection:'column'}}>
         {status?(<div style={{display:'flex',fontSize:'20px'}}><p>your data is successfully saved</p><TiTick style={{fontSize:'30px',paddingTop:'0px'}}></TiTick></div>):null}
   
         <input type='submit' value={status?'Updated':'Update To Resume'} className={classes.save}></input>
         </div>
         </form>
        
        
      </div>}
         </Context.Consumer>
        
      )
   }

 
export default Education
