import React, {useEffect, useState} from 'react';
import {commentsService} from "../../service";
import {Comment} from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments]=useState([]);

    useEffect(()=>{
        commentsService.getAll().then(({data})=> setComments([...data]))
    },[])
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:10,
            height:450,
            overflowY:'scroll'
        }}>
            {comments.map(comment => <Comment key={comments.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};