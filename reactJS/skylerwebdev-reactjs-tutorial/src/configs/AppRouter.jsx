import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
const AppRouter = () => {
    return (
        <div>
            <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/about'><About/></Route>
            <Route path='/contact'><Contact/></Route>
            </Switch>
        </div>
    )
}

export default AppRouter
