import React from 'react'
import Basicinfo from "./../BasicInfo/Basicinfo";
import Education from "./../Education/Education";
import Workexperience from './../../containers/workexpCont/Workexperience';

import Skills from "./../Skill/Skills/Skills";
import Projects from "./../Project/Projects/Projects";
import Objective from "./../Objective/Objective";
import AuthContext from './../ContextApi/Context';
import Template1 from "./../Templates/Template1";
import Navbar from "./../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'

function MainApp() {
   return (
      <div>
          <AuthContext.Provider value={{details:[]}}>
      <Router>
        <Navbar></Navbar>
        <Footer></Footer>
        <Route component={Basicinfo} path='/info' exact></Route>
        <Route component={Workexperience} path='/workexp' exact></Route>
        <Route component={Education} path='/education' exact></Route>
        <Route component={Skills} path='/skills' exact></Route>
        <Route component={Projects} path='/projects' exact></Route>
        <Route component={Objective} path='/objective' exact></Route>
        <Route component={Template1} path='/template' exact></Route>
      </Router>
      </AuthContext.Provider>
      </div>
   )
}

export default MainApp
