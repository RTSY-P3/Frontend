import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/nav.css'

const Nav = () => {

    const [ showLinks, setShowLinks ] = useState(false)
return (

    <div className='nav-bar'>
        <div className='LeftSide'>
            <Link to='/'>Codr.</Link>
        </div>
        <div className='RightSide'>
            <div className='nav-link' id={showLinks ? 'hidden' : ''}>
                <Link to='/credit'>Credit</Link>
                <Link to=''>Resources</Link>
                <Link className='signup' to=''>Sign Up</Link>       
                <Link className='signin' to=''>Log In</Link>
            </div>
            <button className='navbutton' onClick={() => setShowLinks(!showLinks) }></button>
        </div>
    </div>
    )
}

export default Nav