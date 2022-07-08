import React from 'react';
import CommentsComponent from "../components/CommentsComponent";
import {Outlet} from "react-router-dom";

function CommentsPage(props) {
    return (
        <div>
            <Outlet/>
            <hr/>
            <CommentsComponent/>
        </div>
    );
}

export default CommentsPage;