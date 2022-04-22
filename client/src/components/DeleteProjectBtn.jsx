import { useNavigate } from "react-router-dom"
import { DeleteProject } from "../services/PostServices"
import "../styles/deleteprojectbtn.css"

const DeletePostBtn = ( {id} ) => {

    let navigate = useNavigate()

    const handleDelete = async () => {
        await DeleteProject(id)
        navigate('/myprofile')
        window.location.reload()
    }

    return (
        <div>
            <button className="delete-project-btn" onClick={handleDelete}>Delete Project</button>
        </div>
    ) 
}

export default DeletePostBtn