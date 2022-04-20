import { useNavigate } from "react-router-dom"
import { DeleteProject } from "../services/PostServices"


const DeletePostBtn = ( {id} ) => {

    let navigate = useNavigate()

    const handleDelete = async () => {
        await DeleteProject(id)
        navigate('/myprofile')
    }

    return (
        <div>
            <button onClick={handleDelete}>Destroy this post</button>
        </div>
    ) 
}

export default DeletePostBtn