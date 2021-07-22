import { Switch, Route, Redirect } from 'react-router-dom'
import React, { useContext } from 'react'
import LoginForm from './forms/loginForm'
import RegisterForm from './forms/registerForm'
import { AuthContext } from '../context'
import { DnsComponent } from './dns/dnsComponent'
import { LinkComponent } from './dns/linkComponent'
import { NewLinkComponent } from './dns/NewLinkComponent'
import { MainPageComponent } from './mainPage/mainPageComponent'

export const Routes = () => {
  let context = useContext(AuthContext)
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
          <NewLinkComponent />
        </Route>
        <Route>page not exists</Route>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path='/' exact>
        <MainPageComponent />
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
