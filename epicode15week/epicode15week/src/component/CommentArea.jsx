import CommentList from "./CommentList"
import AddComment from './AddComment'
import { useState, useEffect } from "react"

function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const loadComments = async () =>{
        try {
            const response= await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhkYjRhZTFiNWY4ODAwMTU0OTU5NTAiLCJpYXQiOjE3MjA1NjI4NjIsImV4cCI6MTcyMTc3MjQ2Mn0.4KLotdLN6d5_DTdhHuJU115yFpGIVKGN5X2kFkT9GMw"
                    }
            }) 
            const data = await response.json()           
            setComments(data)

        } catch (error) {
            console.error ("Error fetching comments:", error)
        }
    }
    useEffect(() => {
        loadComments()
    }, [asin]);

    return (
        <>
            <AddComment asin={asin} loadComments={loadComments} />
           <CommentList comments={comments} loadComments={loadComments}/>
           
        </>
    )
}

export default CommentArea