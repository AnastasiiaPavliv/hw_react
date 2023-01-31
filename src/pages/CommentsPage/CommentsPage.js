import React from 'react';
import {Comments} from "../../Components";
import {Outlet} from "react-router-dom";


const CommentsPage = () => {
    return (
        <div >
            <Comments />
            <hr/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};