import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './comments.module.css'

const Comment = ({comment}) => {
    const navigate=useNavigate();
    const {postId, id, name, email,body}=comment;
    return (
        <div className={css.Comments}>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button className={css.a} onClick={()=>navigate(String(postId))}>Post</button>
            <br/>
        </div>
    );
};

export {Comment};