import React, {Component} from 'react';

import serviceApi from "../servise.API/ServiceApi";
import Post from "./Post";

class Posts extends Component {
    state = {posts: []}

    componentDidMount() {
        this.serviceApi = new serviceApi()
        this.serviceApi.getPosts().then(value => this.setState({posts : value}))

    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                {this.state.posts.map(value => <Post key={value.id} item={value}/>)}
            </div>
        );
    }
}

export default Posts;