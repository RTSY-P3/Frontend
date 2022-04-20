import React, { useState, useEffect } from 'react'
import { GetProjects, GetComments } from '../services/PostServices'
import { useNavigate, Link } from 'react-router-dom'
// import Comment from '../components/Comment'
import '../styles/feed.css'

const Feed = ( {user, authenticated } ) => {

    const [projects, setProjects] = useState([])

    const [posts, setPosts] = useState([])
    // const [comments, setComments] = useState([])

    let navigate = useNavigate()
    const [comments, setComments] = useState([])

    useEffect(() => {
        const handleProject = async () => {
            const data = await GetProjects()
            setProjects(data)
        }
        // const handleComments = async () => {
        //     const data = await GetComments()
        //     setComments(data)
        // }

        handleProject()
        // handleComments()
    }, [])


    return (user && authenticated) ? (
        <div className='feed-page'>
            <div className='feed-body'>
                <div className='feed-title'>
                    <h1>Users Projects</h1>

               {/* <Comment /> */}
               </div>
                {projects.map((post) => (
                    <div className='card' key={post.id}>
                        <Link to={`/posts/${post._id}`}> 
                        <h3>{post.title}</h3>
                        <div> 
                            <img src={post.image} alt='post' />
                        </div>
                        </Link >

                </div>
             
                ))}
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