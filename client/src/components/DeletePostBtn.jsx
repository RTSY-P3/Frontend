import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DeleteProject } from "../services/PostServices"


const DeletePostBtn = ( {id} ) => {


    const handleDelete = async () => {
        await DeleteProject(id)
    }

    return (
        <div>
            <button onClick={handleDelete}>Destroy this post</button>
        </div>
    ) 
}

export default DeletePostBtn