import { useState } from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        Rabbit Hole
      </NavLink>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
      </button>

      <nav
        className={`nav-links ${menuOpen ? 'menu-open' : ''}`}
        aria-label="Main navigation"
      >
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/cinema" onClick={closeMenu}>
          Cinema
        </NavLink>

        <NavLink to="/coding" onClick={closeMenu}>
          Coding
        </NavLink>

        <NavLink to="/mind" onClick={closeMenu}>
          What’s on My Mind
        </NavLink>

        <NavLink to="/rabbit-holes" onClick={closeMenu}>
          Rabbit Holes
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar