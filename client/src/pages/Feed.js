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
            <div className='feed-body'>
                <div className='feed-title'>

                    <h1 style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>PROJECT FEED</h1>
                    {/* <Comment /> */}
                </div>
                {projects.map((post) => (
                    <div className='card' key={post.id}>
                        <Link to={`/posts/${post._id}`}> 
                        <h3>{post.title}</h3>
                        <div> 
                            <img src={post.image} alt='post' />
                            <p> {post.body}</p>
                        </div>
                        </Link >
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