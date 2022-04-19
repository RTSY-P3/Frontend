import React, { useState, useEffect } from "react"
import { GetPosts } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
import { GetComments } from '../services/PostServices'

const MyProfile = ( {user, authenticated} ) => {
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

    // console.log(posts[0].Comments)

    return (user && authenticated) ? (
        <div className="my-profile">
             {posts.map((post) => ( (post.userId === user.id) ? (
                <div className='card' key={post.id}>
                    <h4>{post.title}</h4>
                    <img src={post.image} alt='post' />
                    <p>{post.body}</p>
                    <div>
                        <h3>Comments:</h3>
                        {comments.map((comment)=> (comment.userId === user.id) ? (
                            <div className="comments">
                                <h3>{comment.body}</h3>
                            </div>
                        ) : <div></div>)}
                    </div>
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