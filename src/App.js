import {Route, Routes} from "react-router-dom";
import {TodosPage} from './pages'
import {AlbumsPage, CommentsPage} from "./pages";
import {Header} from "./Components";
import {PostPage} from "./pages"
const App = () => {
  return (
      <div>
          <Header/>
  <Routes>
      <Route path={'todos'} element={<TodosPage/>}/>
      <Route path={'albums'} element={<AlbumsPage/>}/>
      <Route path={'comments'} element={<CommentsPage/>}>
      <Route path={':postId'} element={<PostPage/>}/>

      </Route>

  </Routes>

      </div>
  );
};

export  {App};