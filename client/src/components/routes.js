import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import LoginForm from './forms/loginForm'
import RegisterForm from './forms/registerForm'

export const Routes = (isLogged) => {
  if (!isLogged) {
    return (
      <Switch>
        <Route exact path='/'>
          <div>main</div>
        </Route>
        <Route exact path='/register'>
          <RegisterForm />
        </Route>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
        <Redirect to='/' />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route exact path='/login'>
        <LoginForm />
      </Route>
      <Route exact path='/'>
        <div>logged main</div>
      </Route>

      <Redirect to='/' />
    </Switch>
  )
}
