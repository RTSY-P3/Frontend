import React, { useState, useEffect } from 'react'
import { GetPosts } from '../services/PostServices'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const handlePosts = async () => {
            const data = await GetPosts()
            setPosts(data)
        }
        handlePosts()
    }, [])


    return (
        <div className='feed-page'>
            {posts.map((post) => (
                <div className='card' key={post.id}>
                    <h3>{post.title}</h3>
                    <div> 
                        <img src={post.image} alt='post' />
                    </div>
                    <p></p>
                </div>
            ))}
        </div>
    )
}

export default Feed