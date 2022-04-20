import { useEffect } from "react"
import { DeleteProject } from "../services/PostServices"


const Delete = ( {user, authenticated} ) => {
    console.log({user})
    const handleDelete = async () => {
        
        await DeleteProject()
    }



    return (
        <div>
            <button onClick={handleDelete}>Destroy this post</button>
        </div>
    ) 
}

export default Delete