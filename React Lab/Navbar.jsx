import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <h1>Navbar</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>

    </div>
  )
}

export default Navbar
