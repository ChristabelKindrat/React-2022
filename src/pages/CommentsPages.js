import React, {useEffect, useState} from 'react';

import CommentsComponents from "../components/CommentsComponents";

import {Outlet} from "react-router-dom";

function CommentsPages(props) {

   const [comments,setComments]= useState([])
     useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/comments')
         .then(value => value.json())
         .then(value => {
             setComments([...value])

         })

     },[])

    return (
        <div>
            {comments.map(comment=> <CommentsComponents item={comment} key={comment.id}/>)}
           <Outlet/>
        </div>
    );
}

export default CommentsPages;