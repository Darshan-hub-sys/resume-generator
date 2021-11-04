import React from 'react'
import {Link} from 'react-router-dom';
import classes from './Basicinfo.css';
import AuthContext from './../ContextApi/Context';
import {TiTick} from 'react-icons/ti';




function Basicinfo() {

   let [basicInfo,updateInfo]=React.useState({});
   let [status,updateStatus]=React.useState(false);
   let contextData=React.useContext(AuthContext);
  

   function storeData(e,context){
      e.preventDefault()
      context.details=[{...basicInfo}]
      updateStatus(true);
      console.log(contextData)
   }
   function handler(e){
      updateInfo({
         ...basicInfo,[e.target.name]:e.target.value
      })
   }
  
   return (
      <AuthContext.Consumer>
         {(context)=><div className={classes.BasicInfo}>
         <h1>Basic Infomation</h1>
         <div >
         <form className={classes.Inputs} onSubmit={(e)=>storeData(e,context)}>
         <input required  type='text' placeholder='First Name' name='fname' onChange={(e)=>handler(e)}></input>
         <input required type='text' placeholder='Last Name' name='lname' onChange={(e)=>handler(e)}></input>
         <input required type='text' placeholder='Address' name='address' onChange={(e)=>handler(e)}></input>
         <input required type='tel' placeholder='Phno' name='phno' onChange={(e)=>handler(e)}></input>
         <input required type='date' placeholder='DOB' name='dob' onChange={(e)=>handler(e)}></input>
         <button className={classes.button} type='submit' value='submit'>{status?'Updated':'Update To Resume'}</button>
         {status?(<div style={{display:'flex',fontSize:'18px'}}><p>your data is successfully saved</p><TiTick style={{fontSize:'30px',paddingTop:'0px',color:'green'}}></TiTick></div>):null}
         </form>
         </div>

      </div>}
      </AuthContext.Consumer>
   )
}

export default Basicinfo
