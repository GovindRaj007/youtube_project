import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {

    return (
        <div>
            {comments.map((cmnt => <Comment info={cmnt} />))}
        </div>
    )
}

export default CommentsList