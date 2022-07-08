import React, {useEffect, useState} from 'react';
import {getPosts} from "../services/all.api.service";
import PostComponent from "./PostComponent";
import {useParams} from "react-router-dom";

function PostsComponent() {
    let {postId} = useParams();
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(postId).then(({data}) => setPosts([{...data}]));
    }, [postId])
    return (
        <div>
            {
                posts.map((value, index) => <PostComponent
                    key={index}
                    item={value}/>)
            }
        </div>
    );
}

export default PostsComponent;