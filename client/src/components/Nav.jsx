import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const Nav = ({ authenticated, user, handleLogOut }) => {
  // const [showLinks, setShowLinks] = useState(false);

  let authenticatedOptions;
  if (user) {
    authenticatedOptions = (
      <nav>
         <Link to="/createpost">Create A Post</Link>
        <h3>Welcome {user.email}!</h3>
        <Link to="/credits">Credits</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/myprofile">My Profile</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    );
  }

  const publicOptions = (
    <nav>
      <Link to="/credits">Credits</Link>
      <Link className="signup" to="/register">Sign Up</Link>
      <Link className="signin" to="/signin">Log In</Link>
    </nav>
  );
  return (
    <header>
      <Link className="link-logo" to='/'>
        <div className="logo-wrapper" alt='logo'>
          <h3 className="logo-text">Codr.</h3>
        </div>
      </Link>
        {/* <div className="nav-link" id={showLinks ? "hidden" : ""}>  
        <button
          className="navbutton"
          onClick={() => setShowLinks(!showLinks)}
        ></button> */}
        {authenticated && user ? authenticatedOptions : publicOptions}
      </header>

  );
};

export default Nav;
