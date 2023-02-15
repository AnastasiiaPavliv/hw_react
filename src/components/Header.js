import React from 'react';
import {useSelector} from "react-redux";
import css from './App.module.css'

const Header = () => {
   const {selectedUser}= useSelector(state => state.users)

    return (
        <div className={css.h}>
            {selectedUser&& selectedUser.name}
<hr/>
        </div>
    );
};

export {Header};