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
            title: "",
            body: "",
            image: "",
        })

    const handleChange = (e) => {
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
        }
    const handleSubmit = async (e) => {
            e.preventDefault();
            await UpdateProject(post.id, formValues);
            navigate("/myprofile");
        }

        
    return (
        <div className="update-form">
            {update ?
            <form className="col" onSubmit={handleSubmit}>
                <input className="create-update" name='title' type='text' placeholder='Title Here' onChange={handleChange} value={formValues.title}></input>
                <input className="create-update" name='body' type='text' placeholder='Body Text' onChange={handleChange} value={formValues.body} ></input>
                <input className="create-update" name='image' type='text' placeholder='Image Link' onChange={handleChange} value={formValues.image}></input>
                <button className="submit-button" type='submit'>Update</button>
                <button className='close-update-button' onClick={() => setUpdate(false)}>&times;</button>
            </form> : 
                <button className='update-button' onClick={() => setUpdate(true)}>Edit Your Project</button>}
        </div>
    )
}

export default UpdateProjectBtn