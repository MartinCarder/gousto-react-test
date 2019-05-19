import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import About from './features/about/'
import Products from './features/products'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <header className="navBar">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/:productId" component={Products} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    )
  }
}

export default App
