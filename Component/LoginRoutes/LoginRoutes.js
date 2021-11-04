import React from 'react'
import Login from "./../Authentication/Login/Login";
import Register from './../Authentication/Register/Register';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'


function LoginRoutes() {
   return (
      <div>
          <Router>
      <Route component={Login} path='/' exact></Route>
      <Route component={Register} path='/register' exact></Route>
      </Router>
      </div>
   )
}

export default LoginRoutes
