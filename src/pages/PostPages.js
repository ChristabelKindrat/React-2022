
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PostComponents from "../components/PostComponents";

function PostPages({item}) {
   const {postId}=useParams()

   const [posts,setPosts]=useState([])

 useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
     .then(value => value.json())
     .then(value => { setPosts([{...value}])

     })},[postId])



    return (
        <div>
            {posts.map(value => <PostComponents item={value} key={value.id}/>)}
        </div>
    );
}

export default PostPages;