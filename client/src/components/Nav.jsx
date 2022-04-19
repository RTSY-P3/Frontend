import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Nav = ({ authenticated, user, handleLogOut }) => {

  let authenticatedOptions;
  if (user) {
    authenticatedOptions = (
      <nav>
        <div className="creatpost">
          <Link to="/createpost">Create A Post</Link>
        </div>
        <div className="rightside">
          <h3>Welcome {user.email}!</h3>
          <Link to="/credits">Credits</Link>
          <Link to="/feed">Feed</Link>
          <Link to="/myprofile">My Profile</Link>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
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
