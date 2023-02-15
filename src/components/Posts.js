import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postAction} from "../redux";
import {Post} from "./Post";

const Posts = () => {
 const dispatch=useDispatch();
 const {posts, errors} = useSelector(state => state.posts);
    useEffect(()=>{
        // postService.getAll().then(({data})=>dispatch(postAction.getAll(data)))
dispatch(postAction.getAll())
    },[dispatch])
    return (
        <div>
            {errors&& JSON.stringify(errors)}
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};