import React, {Component} from 'react';
import {CommentApiService} from "../../services/comment.api.service";
import Comment from "./Comment";

class Comments extends Component {

    state = {comment:[]};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.commentApiService = new CommentApiService();
        this.commentApiService.getComment().then(value => this.setState({comment:value}));
    }

    render() {
        return (
            <div>
                {
                    this.state.comment.map((value,index)=><Comment
                    key={index}
                    item={value}/>)
                }
            </div>
        );
    }
}

export default Comments;