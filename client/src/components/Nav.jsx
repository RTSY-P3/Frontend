import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div className='nav-bar'>
            Nav
            <div className='nav-links'>
                <Link className='home-link' to='/'>Home</Link>
                <Link className='home-link' to=''>Feature</Link>
                <Link className='home-link' to=''>Resources</Link>
                <Link className='home-link' to=''>Sign Up</Link>
                <Link className='home-link' to=''>Log In</Link>
            </div>
        </div>
    )
}

export default Nav