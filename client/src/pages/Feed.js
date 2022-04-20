import React, { useState, useEffect } from 'react'
import { GetComments, GetPosts } from '../services/PostServices'
import { useNavigate, Link } from 'react-router-dom'
import Comment from '../components/Comment'
import '../styles/feed.css'

const Feed = ( {user, authenticated } ) => {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        const handlePosts = async () => {
            const data = await GetPosts()
            setPosts(data)
        }
        const handleComments = async () => {
            const data = await GetComments()
            setComments(data)
        }
        handlePosts()
        handleComments()
    }, [])


    return (user && authenticated) ? (
        <div className='feed-page'>
            <div className='feed-body'>
                <div className='feed-title'>
                    <h1>Users Projects</h1>
                </div>
                    {posts.map((post) => (
                    <div className='card' key={post.id}>
                        <Link to={`/posts/${post._id}`}> 
                            <h3>{post.title}</h3>
                                <div> 
                                    <img src={post.image} alt='post' />
                                </div>
                        </Link >
                        {comments.map((comment)=> (comment.userId === user.id) ? (
                            <div className="comments">
                                <h3>{comment.body}</h3>
                            </div>
                        ) : <div></div>)}
                    </div>
                ))}
                {/* <Comment /> */}
            </div>
        </div>
    ) : (
        <div>
            <h3>You must be signed in to do that! Please log in.</h3>
            <button onClick={() => navigate('/signin')}> Sign in</button>
        </div>
    )
}

export default Feed