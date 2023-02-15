import React from 'react';
import {useSelector} from "react-redux";
import css from './App.module.css'

const HeaderPost = () => {
    const {selectedPost}=useSelector(state => state.posts)
    return (
        <div className={css.h}>
            {selectedPost&& selectedPost.title}
            <hr/>
        </div>
    );
};

export {HeaderPost};