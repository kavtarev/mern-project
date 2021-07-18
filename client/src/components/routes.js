import { Switch, Route, Redirect } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import LoginForm from './forms/loginForm'
import RegisterForm from './forms/registerForm'
import { AuthContext } from '../context'
import { DnsComponent } from './dns/dnsComponent'

export const Routes = () => {
  let context = useContext(AuthContext)
  useEffect(() => {
    console.log('routes.js ', context.isLogged)
  }, [context.isLogged])
  if (!context.isLogged) {
    return (
      <Switch>
        <Route exact path='/'>
          <div>main</div>
        </Route>
        <Route path='/register'>
          <RegisterForm />
        </Route>
        <Route path='/data'></Route>
        <Route path='/login'>
          <LoginForm />
        </Route>

        <Redirect to='/' />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route exact path='/'>
        <div>logged main</div>
      </Route>
      <Route path='/data'>
        <DnsComponent />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Route path='/register'>
        <RegisterForm />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}
