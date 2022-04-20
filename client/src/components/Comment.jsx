import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateComment } from '../services/PostServices'

// function Comment(props) {
//     const {comments} = props
//     const [fBody, setBody] = useState("")
//     const [fUserId, setUserId] = useState("")
//     const [fCreatedAt, setCreatedAt] = useState("")
//     const [fUpdatedAt, setUpdatedAt] = useState("")
//     const [fId, setId] = useState("")
//     const [isAdd, setAdd] = useState(true)
    
//     const getComment = () => {
//         return {
//                 body: fBody,
//                 userId: fUserId,
//                 createdAt: fCreatedAt,
//                 updatedAt: fUpdatedAt
//             }
//         }

//     const loadComment = (e) => {
//         const value = e.target.value
//         const comment = comments.find((comment)=> { return comment.body === value })
//         setBody(comment.body)
//         setUserId(comment.userId)
//         setCreatedAt(comment.createdAt)
//         setUpdatedAt(comment.updatedAt)
//         setId(comment._id)
//         console.log("this is a test", comment)
//     }        

//     const sendToDB = async (e) => {
//         e.preventDefault()  
//         const comments = getComment()        
//             await axios.post(`http://127.0.0.1:3001/comments/create`, comments)
//         window.location.reload()
//     }

    const Update = ({user, authenticated}) => {
        console.log({user})
    const navigate = useNavigate()
    const [update, setUpdate] = useState(false)
    const [formValues, setFormValues] = useState(
        {
        text: '', 
        userId: user.id})
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreateComment(formValues)
        setFormValues({text: ''})
        navigate('/feed')
    }
    
    return (
        <div className='comment'>
            {update ?
            <form onSubmit={handleSubmit}>
                <input name='text' type='text' placeholder='Leave Comment Here' onChange={handleChange} value= {formValues.text}></input>
                <button className="submit-button" type='submit'>Submit</button>
            </form> :
            <button className='create-comment' onClick={() => setUpdate(true)}>Comment</button>}
            {/* <form id='add-form' onSubmit= {sendToDB}>
                <input body="body" placeholder="Enter Comment" className="form-control"  type="text" value={fBody} onChange={(e) => setBody(e.target.value)}/>
                <button type="submit">Submit</button> */}
        </div>
    )
}
export default Update