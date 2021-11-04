import React from 'react'
import Context from './../ContextApi/Context';
import classes from './Template1.css';
import ReactToPdf from 'react-to-pdf';

function Template1() {

    
   const ref = React.createRef();
   

   let contextData=React.useContext(Context);
   let updatedComponent;

   if(Object.keys(contextData).length<6){
         updatedComponent=<h1 style={{textAlign:'center'}}> please fill in details properly</h1>
   }
   else
   {
      let basicInfo=contextData.details;
      let objective=contextData.objective;
      let workExperience=contextData.workexp;
      let education=contextData.education;
      let skill=contextData.skills;
      let project=contextData.project;
   
   
      let array=[basicInfo,objective,workExperience,education,skill,project];
      let status=array.map((value, index, array) => {
         return value.length===0
      })
   
      let tempStatus;
   
      status.forEach(value=>{
            if(value===false){
               tempStatus=true;
            }
            else
            {
               tempStatus=false
            }
      })
      console.log(tempStatus)
      const options = {
         orientation: 'portrait',
         unit: 'in',
         format: [8.26,11.69]
     };
   function onCompletion(){
      const width=document.body.clientWidth;
      if(width>700){
         options.format=[8.26,11.69]
      }
      else
       {
          options.format=[4.26,11.69]
       }
   }
    
   
      if(tempStatus===false ){
         updatedComponent=<h1 style={{textAlign:'center'}}>Some details are not filled</h1>
      }
      else
      {
         updatedComponent=(<div className={classes.PDF}>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf"  options={options} onComplete={()=>onCompletion}  x={.5} y={.5} scale={0.8}>
            {({toPdf}) => (
                  <button onClick={toPdf} className={classes.Generate}>Download and save</button>
            )}
             </ReactToPdf>
         
        <div ref={ref} className={classes.Design}>
        <div>
         <div className={classes.BorderTop}>Resume</div>
   
            <h3 className={classes.Underline}><u>Information</u></h3>
            {basicInfo.map(value=>{
               return (<div>
                  <h3>{value.fname} || {value.lname} || {value.address} || {value.phno} || {value.dob}(D.O.B)</h3>          
                 
               </div>)
            })}
         </div>
         <div className={classes.Border}></div>
   
         <div>
            <h3 className={classes.Underline}><u>Objective</u></h3>
            {objective.map(value=>{
               return (<div>
                  <p>{value.object}</p>
               </div>)
            })}
         </div>
         <div className={classes.Border}></div>
   
         <div>
            <h3 className={classes.Underline}><u>Work Experience</u></h3>
            {workExperience.map(value=>{
               return (<div>
                  <h3>{value.companyName}</h3>
                  <p>{value.expInShort}</p>
               </div>)
            })}
         </div>
         <div className={classes.Border}></div>
   
         <div>
            <h3 className={classes.Underline}><u>Education</u></h3>
            {education.map(value=>{
               return (<div>
                  <div>
                     <h4>SSLC -- {value.schoolname}/{value.marks}</h4>
                  </div>
                  <div>
                     <h4>PUC -- {value.collegename}/{value.marksobtained}</h4>
                  </div>
                  <div>
                     <h4>Degree -- {value.degname}/{value.degmarks}</h4>
   
                  </div>
               </div>)
            })}
         </div>
         <div className={classes.Border}></div>
   
         <div>
            <h3 className={classes.Underline}><u>Skills</u></h3>
            {skill.map(value=>{
               return (<div>
                  <p>{value.skillname} - {value.level}</p>
               </div>)
            })}
         </div>
         <div className={classes.Border}></div>
   
         <div>
            <h3 className={classes.Underline}><u>Projects</u></h3>
            {project.map(value=>{
               return (<div>
                   <h3>{value.projectTitle}</h3>
                  <p>{value.projectExplanation}</p>
               </div>)
            })}
         </div>
         </div>
         </div>
         )
      }
   }
  
   console.log(contextData)
   return (
      <div>
           {updatedComponent}
      </div>
   )
}

export default Template1
