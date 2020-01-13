import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import PrivateRoute from './PrivateRoute'
const AppRouter = () => {
    return (
        <div>
            <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/about'><About/></Route>
            <PrivateRoute path='/contact' component={Contact}></PrivateRoute>
            </Switch>
        </div>
    )
}

export default AppRouter
