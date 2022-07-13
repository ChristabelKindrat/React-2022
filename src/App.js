import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import {useState} from "react";
import {getCommentUsers} from "./servises/user.api.service";

function App() {

  const [comments, setComments] =useState([])

    const elevate=(id)=>{
        getCommentUsers(id).then(({data}) => setComments([...data]));
    };

  return (

    <div className="App">
        <h2>comments of chosen post</h2>
        {comments.map(value => <div>{value.body}</div>)}
        <div><Users elevate={elevate}/></div>

    </div>
  );
}

export default App;
