import React from 'react'
import '../styles/landing.css'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    let navigate = useNavigate()
    
    return (
        <main className="landing-container">
            <div className='landing-leftside'></div>
            <div className='landing-rightside'>
                <div className='landing-content'>
                    <h1 className='landing-header'>Discover & share your next <span id='Project'>project.</span></h1>
                    <p className='landing-description' > Join Codr. today and get inspired with incredible projects from lead software engineers around the world.</p> 
                </div>
                <div className='landing-button-wrapper'>
                    <div className='signupbutton'>
                        <button className='landingbutton' onClick={() => navigate('/register')}>Become a Pro</button> 
                     </div>
                     <div className='signinbutton'>
                        <button className='landingbuttonSignin' onClick={() => navigate('/signin')}>Sign in</button>
                        <p className='backto-Signin'>Already have an account?</p>
                    </div> 
                </div> 
                <div className='counter'></div>
            </div>
        </main>
    )
}



export default Landing