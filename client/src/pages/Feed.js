import React, { useState, useEffect } from 'react'
import { GetProjects } from '../services/PostServices'
import { useNavigate, Link } from 'react-router-dom'
// import Comment from '../components/Comment'
import '../styles/feed.css'
import Footer from '../components/Footer'

const Feed = ( {user, authenticated } ) => {

    const [projects, setProjects] = useState([])

    // const [comments, setComments] = useState([])

    let navigate = useNavigate()
  
    useEffect(() => {
        const handleProject = async () => {
            const data = await GetProjects()
            setProjects(data)
        }

        handleProject()
        // handleComments()
    }, [])

    return (user && authenticated) ? (
        <div className='feed-page'>
                <div className='feed-title'>
                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>PROJECT FEED</h1>
                </div>

                <div className='feed-wrapper'>
                    {projects.map((post) => (
                        <div className='feed-content' key={post.id}>
                            {/* <Link to={`/posts/${post._id}`}>  */}
                            <h2 id='post-title' >{post.title}</h2>
                            <div className='feed-image'>
                                <img id="project-poster" src={post.image} alt='post' />
                            </div>
                            <div className='feed-intro'>
                                <p id='feed-body' > {post.body}</p>
                            </div>
                            {/* </Link > */}
                        </div>
                    ))}
                </div>
            <footer>
                 <Footer />
            </footer>
        </div>
    ) : (
        <div className="must-signin" 
            style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'200px'}}>
        <h3 
        style={{  fontSize:'36px' }}className="signin-header">
            Ya gotta login to do that, Bub 💩 </h3>
            <button style={{ margin:'10px 0' }}className="landingbutton" onClick={() => navigate('/signin')}> Sign in</button>
            <button className="landingbuttonSignin" onClick={() => navigate('/')}>Back to Home</button>
        </div>
    )
}

export default Feed