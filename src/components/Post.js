import React from 'react';
import {useDispatch} from "react-redux";
import {postAction} from "../redux";

const Post = ({post}) => {
   const {userId, id, title, body} = post;
   const dispatch = useDispatch();
    return (
        <div>
            <div><b>userId:</b> {userId}</div>
            <div><b>id:</b> {id}</div>
            <div><b>title:</b> {title}</div>
            <div><b>body:</b> {body}</div>
            <button onClick={()=> dispatch(postAction.setSelectedPost(post))}>Select</button>
            <button onClick={()=> dispatch(postAction.getById({id}))}>ApiSelect</button>
        </div>

    );
};

export {Post};