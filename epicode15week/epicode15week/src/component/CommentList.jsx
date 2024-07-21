import SingleComment from './SingleComment'

function CommentList({comments, loadComments, alert, modal, closeModal}){
return(
    <>
    {comments.map(comment =>
    <SingleComment key={comment._id} comments={comment} loadComments= {loadComments}/>
    )}
    </>
)

}

export default CommentList