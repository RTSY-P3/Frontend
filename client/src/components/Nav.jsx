import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

const Nav = ({ authenticated, user, handleLogOut }) => {

  const [showLinks, setShowLinks] =useState(false)

  let authenticatedOptions;
  if (user) {
    authenticatedOptions = (
      <nav>
        <div className="creatpost">
          <Link to="/createpost"><button className="creatpostbtn">Create A Post</button></Link>
        </div>

        <div className="rightside" id={showLinks ? 'hidden' : ''}>
          <Link className="rightsideLink" to="/credits">Credits</Link>
          <Link className="rightsideLink" to="/feed">Feed</Link>
          <Link className="rightsideLink" to="/myprofile">My Profile</Link>
          <Link className="rightsideLink" onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>

        <div className="hidden-menu">
          <button onClick={() => setShowLinks(!showLinks) }></button>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="credit-page">
      <Link to="/credits">Credits</Link>
    </nav>
  )
  
  return (
    <header>
      <Link to='/feed'>
        <div className="logo-wrapper" alt='logo'>
        <h3>Codr<span style={{ color:'#5E3DD3'}}>.</span></h3>
        </div>
      </Link>
        {authenticated && user ? authenticatedOptions : publicOptions}
      </header>

  )
}

export default Nav;
