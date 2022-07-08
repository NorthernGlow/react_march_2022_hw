import React from 'react';

function PostComponent({item}) {
    return (
        <div>
            <h3>{item.id} - {item.title}</h3>
            Body:
            <p>{item.body}</p>
        </div>
    );
}

export default PostComponent;