import React, {Component} from 'react';
import serviceApi from "../servise.API/ServiceApi";
import Comment from "./Comment";

class Comments extends Component {

    state = {comments: []}

    componentDidMount() {
        this.serviceApi = new serviceApi()
        this.serviceApi.getComments().then(value => this.setState({comments: value}))
    }

    render() {
        return (
            <div>
                <h2>Comment</h2>
                {this.state.comments.map(value => <Comment key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Comments;