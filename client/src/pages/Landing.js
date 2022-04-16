import React from 'react'
import '../styles/landing.css'
import { useNavigate } from 'react-router-dom'
 

const Landing = () => {
    let navigate = useNavigate()
    
    return (
        <div className="landing-page">
            <div className='landing-image'>
            </div>
            <div className='landing-content-wrapper'>
                <div className='landing-content'>
                    <h1 style={{textAlign:'left'}}>Discover & share your next project.</h1>
                    <p style={{textAlign:'left'}} > Join Codr. today and get inspired with incredible projects from lead software engineers around the world.</p> 
                </div>
                <div className='landing-button-wrapper'>
                 <button className='landingbutton' onClick={() => navigate('/signin')}>Become a Pro</button>   
                </div> 
            </div>
        </div>
    )
}



export default Landing