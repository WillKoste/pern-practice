import React from 'react'
import './App.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/screens/home/Home'
import Cart from './components/screens/cart/Cart'
import Login from './components/screens/login/Login'

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <main className="py-3">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
