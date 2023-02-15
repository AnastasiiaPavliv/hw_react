import {Header} from "./components/Header";
import {Posts, Users} from "./components";
import {HeaderPost} from "./components/HeaderPost";
import css from "./components/App.module.css"

const App = () => {
 return(
     <div className={css.app}>
         <div className={css.U}>
         <Header/>
         <Users/>
         </div>
         <div>
         <HeaderPost/>
         <Posts/>
         </div>
      </div>
  );
};

export  {App};
