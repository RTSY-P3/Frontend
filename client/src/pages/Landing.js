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
                    <h1 className='landing-header'>Discover & share your next project.</h1>
                    <p className='landing-description' > Join Codr. today and get inspired with incredible projects from lead software engineers around the world.</p> 
                </div>
                <div className='landing-button-wrapper'>
                 <button className='landingbutton' onClick={() => navigate('/signin')}>Become a Pro</button>   
                </div> 
            </div>
        </main>
    )
}



export default Landing