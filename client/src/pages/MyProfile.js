import React, { useState, useEffect } from "react"
import { GetProjects } from '../services/PostServices'
import { useNavigate } from 'react-router-dom'
import { GetComments } from '../services/PostServices'
import DeleteProjectBtn from "../components/DeleteProjectBtn"
import UpdateProjectBtn from "../components/UpdateProjectButton"
import '../styles/App.css'
import Footer from '../components/Footer'
import '../styles/myprofile.css'


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
    console.log(projects[0])
    return (user && authenticated) ? (
       <>
        <div className="thumbnail-bg"></div>
        <div className="user">
            <div className="user-profile"></div>
            <div className="user-stats">
                <div className="userName">
                    <p>John Wick</p>
                </div>
                <div className="userFollowers">
                    <p>Projects <strong>8</strong></p>
                    <p>Followers <strong>3,254,546</strong></p>
                    <p>Following <strong>3</strong></p>
                </div>
            </div>
        </div>
        <div className="myProfile">
             {projects.map((post) => ( (post.userId === user.id) ? (
                <div className='card' key={post.id}>
                    <div className="project-poster-wrapper">
                             <img id="myProject-poster" src={post.image} alt='post' />
                        <div className="ctaProfile">
                            <div className="ctaDelete"> 
                                <DeleteProjectBtn id={post.id} />
                            </div> 
                            <div className="ctaUpdate"> 
                                <UpdateProjectBtn post={post} />
                            </div>
                        </div> 
                    </div>
                    <div className="myProject-content">
                        <h1 id="projectTitle">{post.title}</h1>
                        <p id="projectBody">{post.body}</p>
                    </div>
                </div> ) : <div></div>
             ))}
             <Footer />
        </div>
        </>
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