import { useNavigate, useParams } from "react-router-dom"
import { UpdateProject } from "../services/PostServices"
import { useState } from "react"


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
        <div>
            {update ?
            <form onSubmit={handleSubmit}>
                <input name='title' type='text' placeholder='Edit title Here' onChange={handleChange} value={formValues.title}></input>
                <input name='body' type='text' placeholder='Edit Body Here' onChange={handleChange} value={formValues.body} ></input>
                <input name='image' type='text' placeholder='Enter Image Source Here' onChange={handleChange} value={formValues.image}></input>
                <button className="submit-button" type='submit'>Update</button>
            </form> : 
                <button className='update-button' onClick={() => setUpdate(true)}>Edit this project</button>}
        </div>
    )
}

export default UpdateProjectBtn