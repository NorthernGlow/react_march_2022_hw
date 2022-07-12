import React, {Component} from 'react';
import {PostApiService} from "../../services/post.api.service";
import Post from "./Post";

class Posts extends Component {

    state = {posts: []};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.postApiService = new PostApiService();
        this.postApiService.getPost().then(value => this.setState({posts: value}));
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((value,index) => <Post
                    key={index}
                    item={value}/>)
                }
            </div>
        );
    }
}

export default Posts;