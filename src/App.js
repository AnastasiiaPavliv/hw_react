import {Route, Routes} from "react-router-dom";
import {TodosPage} from './pages'
import {AlbumsPage, CommentsPage} from "./pages";
import {Header} from "./Components";
const App = () => {
  return (
      <div>
          <Header/>
  <Routes>
      <Route path={'todos'} element={<TodosPage/>}/>
      <Route path={'albums'} element={<AlbumsPage/>}/>
      <Route path={'comments'} element={<CommentsPage/>}/>

  </Routes>

      </div>
  );
};

export  {App};