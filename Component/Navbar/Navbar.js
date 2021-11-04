import React from 'react'
import classes from './Navbar.css';
import {AiFillInfoCircle} from 'react-icons/ai';
import {AiOutlineProject} from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi'
import {MdCastForEducation} from 'react-icons/md';
import {GiFlagObjective} from 'react-icons/gi';
import {MdOutlineWork} from 'react-icons/md';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

function Navbar() {
   const style={
      color:'white',
      fontSize:'30px'
   }

   const linkStyle={
      color:'white',
      textDecoration:'none'
   }
   return (
      <div >
         <div className={classes.Navbar}>
         <div>
            <AiFillInfoCircle style={style}></AiFillInfoCircle>
            <p><Link to='info' style={linkStyle}>Info</Link></p>
         </div>
         <div>
         <AiOutlineProject style={style}></AiOutlineProject>
         <p><Link to='/projects' style={linkStyle}>Project</Link></p>
         </div>
         <div>
         <GiSkills style={style}></GiSkills>
         <p><Link to='/skills' style={linkStyle}>Skills</Link></p>
         </div>
         <div>
         <MdCastForEducation style={style}></MdCastForEducation>
         <p><Link to='/education' style={linkStyle}>Education</Link></p>
         </div>
         <div>
         <GiFlagObjective style={style}></GiFlagObjective>
         <p><Link to='/objective' style={linkStyle}>objective</Link></p>
         </div>
         <div>
         <MdOutlineWork style={style}></MdOutlineWork>
         <p><Link to='/workexp' style={linkStyle}>WorkExp</Link></p>
         </div>
         </div>
         <h3 style={{textAlign:'center',color:'red'}}>Click on specific links to fill in details</h3>
      </div>
   )
}

export default Navbar
