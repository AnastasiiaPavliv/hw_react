import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post"
import {postService} from "../../services";

const Posts = ({userId}) => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        postService.getByUserId(userId).then(({data})=>setPosts([...data]))
    }, [userId])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};