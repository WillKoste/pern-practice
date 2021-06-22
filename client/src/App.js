import React from 'react'
import './App.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <Router>
      <div>
      <Navbar />
      <main className="py-3">
        <div className="container">
          <h1>Welcome2store</h1>
        </div>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
