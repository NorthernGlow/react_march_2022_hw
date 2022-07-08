import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import TodosPage from "./page/TodosPage";
import AlbumsPage from "./page/AlbumsPage";
import CommentsPage from "./page/CommentsPage";
import PostsComponent from "./components/PostsComponent";

function App() {
  return (
    <div >
      <div>
      <h2>Menu</h2>
      <ul>
        <li><Link to={'todos'}>todos</Link></li>
        <li><Link to={'albums'}>albums</Link></li>
        <li><Link to={'comments'}>comments</Link></li>
      </ul>
      </div>

      <div>
        <h2>Content</h2>
        <Routes>
          <Route path={'todos'} element={<TodosPage/>}/>
          <Route path={'albums'} element={<AlbumsPage/>}/>
          <Route path={'comments'} element={<CommentsPage/>}>
              <Route path={':postId'} element={<PostsComponent/>}/>
          </Route>
        </Routes>
      </div>


    </div>
  );
}

export default App;
