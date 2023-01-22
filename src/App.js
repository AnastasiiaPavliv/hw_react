import {useState} from "react";
import {Users} from "./Componets/Users/Users";
import {Posts} from "./Componets/Posts/Posts";

const App = () => {
    const [userId, setUserId]=useState([]);
  return (
      <div>
<Users setUserId={setUserId}/>
<hr/>
          {userId && <Posts userId={userId}/>}
      </div>
  );
};

export  {App};
