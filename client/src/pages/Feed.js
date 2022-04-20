import React, { useState, useEffect } from 'react'
import { GetPosts } from '../services/PostServices'
import { useNavigate, Link } from 'react-router-dom'
import Comment from '../components/Comment'
import '../styles/feed.css'


const Feed = ( {user, authenticated } ) => {
    const [posts, setPosts] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        const handlePosts = async () => {
            const data = await GetPosts()
            setPosts(data)
        }
        handlePosts()
    }, [])


    return (user && authenticated) ? (
        <div className='feed-page'>
            <div className='feed-body'>
                <div className='feed-title'>
                    <h1>Users Projects</h1>
                </div>
                {posts.map((post) => (
                    <div className='card' key={post.id}>
                        {/* <Link to={`/posts/${post._id}/details`}>  */}
                        <h3>{post.title}</h3>
                        <div> 
                            <img src={post.image} alt='post' />
                        </div>
                        {/* </Link > */}
                        <Comment ></Comment>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="must-signin" 
    style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'200px'}}>
        <h3 
        style={{  fontSize:'36px' }}className="signin-header">
            Oops, we fucked up sorry! 💩 </h3>
            <button style={{ margin:'10px 0' }}className="landingbutton" onClick={() => navigate('/signin')}> Sign in</button>
            <button className="landingbuttonSignin" onClick={() => navigate('/')}>Back to Home</button>
        </div>
    )
}

export default Feed