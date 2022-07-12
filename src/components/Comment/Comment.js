import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.comment = this.props.item;
    }

    render() {
        return (
            <div>
                {this.comment.id} - {this.comment.name} <br/>
                Body: <br/> {this.comment.body} <hr/>
            </div>
        );
    }
}

export default Comment;