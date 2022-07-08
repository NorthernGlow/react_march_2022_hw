import React, {useEffect, useState} from 'react';
import {getComments} from "../services/all.api.service";
import CommentComponent from "./CommentComponent";
import {Outlet} from "react-router-dom";

function CommentsComponent(props) {
    let [comments,setComments] = useState([]);

    useEffect(()=>{
        getComments().then(({data})=>setComments([...data]));
    },[])

    return (
        <div>
            <div>Comments:
                {
                    comments.map((value, index) => <CommentComponent
                        key={index}
                        item={value}/>)
                }
            </div>
        </div>
    );
}

export default CommentsComponent;
