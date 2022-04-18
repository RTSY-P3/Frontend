import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/nav.css";

const Nav = ({ authenticated, user, handleLogOut }) => {
  const [showLinks, setShowLinks] = useState(false);

  let authenticatedOptions;
  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link to="/feed">Feed</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    );
  }

  const publicOptions = (
    <nav className="nav-link">
      <Link className="LeftSide" to="/">Codr.</Link>
      <Link className="RightSide" to="">Resources</Link>
      <Link className="RightSide signup" to="/register">Sign Up</Link>
      <Link className="RightSide signin" to="/signin">Log In</Link>
    </nav>
  );
  return (
    <div className="nav-bar">
        <div className="nav-link" id={showLinks ? "hidden" : ""}>  
        <button
          className="navbutton"
          onClick={() => setShowLinks(!showLinks)}
        ></button>
        {authenticated && user ? authenticatedOptions : publicOptions}
      </div>
    </div>
  );
};

export default Nav;
