import React, { useState, useEffect } from "react"
import { GetPosts } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const MyProfile = ( {user, authenticated} ) => {
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
        <div className="my-profile">
             {posts.map((post) => ( (post.userId === user.id) ? (
                <div className='card' key={post.id}>
                    <h4>{post.title}</h4>
                    <img src={post.image} alt='post' />
                    <p>{post.body}</p>
                </div> ) : <div></div>
             ))}
        </div>
    ) : (
        <div>
            <h3>You must be signed in to do that! Please log in.</h3>
            <button onClick={() => navigate('/signin')}> Sign in</button>
        </div>
    )
}

export default MyProfile