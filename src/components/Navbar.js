import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/">Home</Link>
      <Link to="/users">Usuarios</Link>
    </section>
  </nav>
)
