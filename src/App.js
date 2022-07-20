import './App.css';
import React, {Component} from 'react';

import Comments from "./components/Comments";
import Posts from "./components/Posts";

class App extends Component {
  render() {
    return (
        <div>
            <Posts/>
            <Comments/>

        </div>
    );
  }
}

export default App;