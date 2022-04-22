import { useNavigate } from "react-router-dom"
import { UpdateProject } from "../services/PostServices"
import { useState } from "react"
import "../styles/updateprojectform.css"


const UpdateProjectBtn = ( { post } ) => {
    let navigate = useNavigate()
    console.log(post)
    const [update, setUpdate] = useState(false);
    const [formValues, setFormValues] = useState(
        {
            title: post.title,
            body: post.body,
            image: post.image,
        })

    const handleChange = (e) => {
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
        }
    const handleSubmit = async (e) => {
            e.preventDefault();
            await UpdateProject(post.id, formValues);
            navigate("/myprofile");
            window.location.reload()
        }

        
    return (
        <div className="update-form">
            {update ?
            <form className="col-2" onSubmit={handleSubmit}>
                <div className="update-close-button">
                    <button className='close-update-button' onClick={() => setUpdate(false)}>&times;</button>
                </div>
                <input className="create-update-title" name='title' type='text' placeholder='Title Here' onChange={handleChange} value={formValues.title}></input>
                <textarea className="create-update" name='body' type='text' placeholder='Body Text' onChange={handleChange} value={formValues.body} ></textarea>
                <input className="create-update" name='image' type='text' placeholder='Image Link' onChange={handleChange} value={formValues.image}></input>
                <div className="update-close-button">
                    <button className="submit-button" type='submit'>Submit Changes</button>
                </div>
            </form> : 
                <button className='update-button' onClick={() => setUpdate(true)}>Edit Your Project</button>}
        </div>
    )
}

export default UpdateProjectBtn