import { Switch, Route, Redirect } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import LoginForm from './forms/loginForm'
import RegisterForm from './forms/registerForm'
import { AuthContext } from '../context'
import { DnsComponent } from './dns/dnsComponent'
import { LinkComponent } from './dns/linkComponent'

export const Routes = () => {
  let context = useContext(AuthContext)
  useEffect(() => {
    console.log('routes.js ', context.isLogged)
  }, [context.isLogged])
  if (context.isLogged) {
    return (
      <Switch>
        <Route path='/links' exact>
          <DnsComponent />
        </Route>
        <Route path='/link/:id' exact>
          <LinkComponent />
        </Route>
        <Route path='/new' exact>
          <div>create</div>
        </Route>
        <Route>page not exists</Route>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path='/' exact>
        <div>main</div>
      </Route>
      <Route path='/register'>
        <RegisterForm />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Redirect to='/' />
    </Switch>
  )
}
