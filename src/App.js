import {useReducer, useRef} from "react";
import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";

const App = () => {
    const catInp=useRef();
    const dogInp=useRef();
    const createCat=()=>{

    };
    const createDog=()=>{

    };
    const reducer= (state, action)=> {
switch (action.type){
    case 'ADD_CAT':
        const [last]=state.cats.slice(-1);
        const id = last?last.id=1:0;
        return {...state, cats:[...state.cats, {id, name:action.payload}]}
    case 'DELETE_CAT':
       const index= state.cats.findIndex(cat=>cat.id===action.payload);
      state.cats.splice(index, 1)
        return{...state}
    case 'ADD_DOG':
        const [lastD]=state.dogs.slice(-1);
        const iddog = last?last.id=1:0;
        return {...state, dogs:[...state.dogs, {id, name:action.payload}]}
    case 'DELETE_DOG':
       const indexD= state.dogs.findIndex(cat=>cat.id===action.payload);
      state.dogs.splice(indexD, 1)
        return{...state}
}
    };
    const initValue=()=>{
        {}
    }
   const [state, dispatch]= useReducer(reducer,null, initValue)
  return (
      <div>
<div>
    <input type={"text"} ref={catInp}/>
    <button onClick={createCat}>CreateCat</button>
    <Cats/>
</div>
<div>
    <input type={"text"} ref={dogInp}/>
    <button onClick={createDog}>CreateDog</button>
    <Dogs/>
</div>
      </div>
  );
};

export  {App};
