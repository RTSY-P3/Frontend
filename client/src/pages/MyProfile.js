import React, { useState, useEffect } from "react"
import { GetProjects } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
import { GetComments } from '../services/PostServices'
import DeleteProjectBtn from "../components/DeleteProjectBtn"
import UpdateProjectBtn from "../components/UpdateProjectBtn"
import '../styles/App.css'


const MyProfile = ( {user, authenticated} ) => {
    const [projects, setProjects] = useState([])
    const [comments, setComments] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        const handleProjects = async () => {
            const data = await GetProjects()
            setProjects(data)
        }
        
        const handleComments = async () => {
            const data = await GetComments()
            setComments(data)
        }

        handleProjects()
        handleComments()
    }, [])

    // console.log(projects[0].Comments)

    return (user && authenticated) ? (
        <div className="my-profile">
             {projects.map((post) => ( (post.userId === user.id) ? (
                <div className='card' key={post.id}>
                    <h4>{post.title}</h4>
                    <img src={post.image} alt='post' />
                    <p>{post.body}</p>
                    <DeleteProjectBtn id={post.id} />
                    <UpdateProjectBtn post={post} />

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

export default MyProfile