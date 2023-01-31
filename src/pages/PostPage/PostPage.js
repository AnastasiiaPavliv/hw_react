import React, {useEffect, useState} from 'react';
import {routes, urls} from "../../configs";
import { useNavigate, useParams} from "react-router-dom";
import {postService} from "../../service/postService";

const PostPage = () => {
   const {postId}= useParams();
   // const navigate = useNavigate();
   const [post,  setPost]=useState(null);

    useEffect(()=>{
        if(postId) {
            postService.getById(postId).then(({data}) => {setPost({...data})
            })}
    }, [postId])
    if (!post) return null;

    return (
        <div>
            <div>userId:{postId}</div>
            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <div>body:{post.body}</div>
            <br/>
            {/*<button onClick={()=> navigate(`/${urls.comments}`)}>{'<'}</button>*/}
        </div>
    );
};

export {PostPage};