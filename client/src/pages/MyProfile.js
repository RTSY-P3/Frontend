import React, { useState, useEffect } from "react"
import { GetPosts } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'

const MyProfile = ( {user, authenticated, projects } ) => {
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
            <img></img>
            <h2>{user.name}</h2>
            <h3></h3>
        </div>
    ) : (
        <div>
            <h3>You must be signed in to do that! Please log in.</h3>
            <button onClick={() => navigate('/signin')}> Sign in</button>
        </div>
    )
}

export default MyProfile