import React from 'react';
import {Link} from "react-router-dom";

function CommentComponent({item}) {
    return (
        <div>
            <Link to={item.postId.toString()}>{item.id} - {item.name}</Link>
        </div>
    );
}

export default CommentComponent;