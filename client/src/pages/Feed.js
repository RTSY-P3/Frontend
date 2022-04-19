import React, { useState, useEffect } from 'react'
import { GetPosts } from '../services/PostServices'
import { useNavigate, Link } from 'react-router-dom'
import Comment from '../components/Comment.jsx'
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
            <h1>Users Projects</h1>
            {posts.map((post) => (
                <div className='card' key={post.id}>
                    <Link to={`/posts/${post._id}/details`}> 
                    <h3>{post.title}</h3>
                    <div> 
                        <img src={post.image} alt='post' />
                    </div>
                    <div className='comment'>
                    </div>
                    <p></p>
                    </Link >
                    <Comment ></Comment>
                </div>
            ))}
        </div>
    ) : (
        <div>
            <h3>You must be signed in to do that! Please log in.</h3>
            <button onClick={() => navigate('/signin')}> Sign in</button>
        </div>
    )
}

export default Feed