import React,{useState} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import classes from './worke.css';
import {TiTick} from 'react-icons/ti';

function WorkExp(props) {
   const [workExp,updateWork]=useState({})
   const [companyName,updateCname]=useState('');
   const [expInShort,updateExp]=useState('');
   const [status,updateStatus]=useState(false);
   function companyTitle(e){
      updateCname(e.target.value);
      updateWork({...workExp,companyName:e.target.value})
   }

   function expShort(e){
      updateExp(e.target.value);
      updateWork({...workExp,expInShort:e.target.value})
   }
   function displayText(e){
      e.preventDefault();
      updateStatus(!status)
      console.log(workExp);
      props.parentCallBack(workExp);
   }
   return (
      <div >
         <Router>
            <form className={classes.WorkInputs} onSubmit={(e)=>displayText(e)}>
            <input required type='text' placeholder='company name' onInput={(e)=>companyTitle(e)} value={companyName}></input>
            <input required type='text' placeholder='exp in short' onInput={(e)=>expShort(e)} value={expInShort}></input>
            {status?(<div style={{display:'flex',fontSize:'18px'}}><p>your data is successfully saved</p><TiTick style={{fontSize:'30px',paddingTop:'0px',color:'green'}}></TiTick></div>):null}
            <button type='submit' >Save</button>
            </form>
         </Router>
         
      </div>
   )
}

export default WorkExp
