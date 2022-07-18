import React from 'react';
import {Link} from "react-router-dom";

function CommentsComponents({item}) {
    return (
        <div>
            {item.postId}
            <h4>{item.name}</h4>
            {item.body} - <span><Link to={item.postId.toString()} state={item.postId}>comment post</Link></span>
            <hr/>


        </div>
    );
}

export default CommentsComponents;