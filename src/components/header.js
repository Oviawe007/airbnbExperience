import React from "react"

function Header() {
  return (
      <nav className="nav">
          <img src="../images/logo.png" className="nav--logo" alt="nav-logo" />
          <ul className="nav--link">
              <li className="nav--item active"><a href="/">Home</a></li>
              <li className="nav--item"><a href="/#">About</a></li>
              <li className="nav--item"><a href="/#">Explore</a></li>
              <li className="nav--item"><a href="/#">Contact</a></li>  
          </ul>
      </nav>
      )
}

export default Header;
