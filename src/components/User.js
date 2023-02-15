import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux";

const User = ({user}) => {
    const {id, name,username} =user;
    const dispatch=useDispatch();
    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>name:</b> {name}</div>
            <div><b>username:</b> {username}</div>
            <button onClick={()=> dispatch(userActions.setSelectedUser(user))}>Select</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>ApiSelect</button>
        </div>
    );
};

export {User};