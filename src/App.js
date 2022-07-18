import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import TodosPages from "./pages/TodosPages";
import AlbumsPages from "./pages/AlbumsPages";
import CommentsPages from "./pages/CommentsPages";
import PostPages from "./pages/PostPages"

function App() {


    return (
        <div>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to={'/'}>todos</Link>
                    </li>
                    <li>
                        <Link to={'/albums'}>albums</Link>
                    </li>
                    <li>
                        <Link to={'/comments'}>comments</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Answer</h4>
                <Routes>
                    <Route path={'/'} element={<TodosPages/>}/>
                    <Route path={'/albums'} element={<AlbumsPages/>}/>
                    <Route path={'/comments'} element={<CommentsPages/>}>
                        <Route path={':postId'} element={<PostPages/>}/>
                    </Route>


                </Routes>
            </div>

        </div>
    );
}

export default App;
