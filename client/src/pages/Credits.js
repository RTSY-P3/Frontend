import React from 'react'
import '../styles/credit.css'
import Footer from '../components/Footer'

const Credits = () => {

    return (
        <div className='credits-page-container'>
            <div className='credit-page-hero'>
                <div className='credit-left'>
                    <h1 className='hero-h1'>The heart of the Developing Community</h1>
                    <p className='hero-p'>
                    <strong>We’re on a mission to build the world’s best community for developer to share, grow, and get hired.</strong> (Actually, we are just building this website so we could pass this course, you can check the project by clicking this link 👉  <a style={{ color:'#5E3DD3', fontWeight:'600' }} href='https://github.com/RTSY-P3/Frontend' target="_blank" rel="noreferrer"> here</a>)
                    </p>
                </div>
                <div className='section-image'>
                    <div className='section-image image1'></div>
                    <h6>Illustration by unDraw</h6>
                </div>  

            </div>
            <div className='hero-image'>
                <img src="" alt=""></img>
            </div>

            <div className='section-2'>
                <div className='section-header'>
                    <h2 className='section-title'>
                        Get to know us
                    </h2>
                    <h3>Codr is a 100% remote team. We believe that if you follow us on social media we will be successful.</h3>
                </div>
                <div className='profile-wrapper'></div>
                <div className='profile'>
                       <a href='https://www.linkedin.com/in/tiffanympereira/' target="_blank" rel="noreferrer"><div className='profile-image profile-1'></div></a> 
                        <h4>Tiffany</h4>
                </div>  
                <div className='profile'>
                        <a href='https://www.linkedin.com/in/ryanditzel/' target="_blank" rel="noreferrer"><div className='profile-image profile-2'></div></a>
                        <h4>Ryan</h4>
                </div> 
                <div className='profile'>
                        <a href='https://www.linkedin.com/in/steven-delitta/' target="_blank" rel="noreferrer"><div className='profile-image profile-3'></div></a>
                        <h4>Steven</h4>
                </div> 
                <div className='profile'>
                        <a href='https://www.linkedin.com/in/yusongshi/' target="_blank" rel="noreferrer"><div className='profile-image profile-4'></div></a>
                        <h4>Yusong</h4>
                </div> 
                </div>
                <Footer />
            </div>
    )
}

export default Credits