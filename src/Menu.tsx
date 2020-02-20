import React from 'react';
import {NavLink} from 'react-router-dom';

export const Menu : React.FC<{}> = () => {
    return (<div>
            <NavLink to={"/"}>Home</NavLink>
            <br></br>
            <NavLink to={"/list"}>List</NavLink>
            <br></br>
            <NavLink to={"/member"}>Member</NavLink>
            <br></br>
            <NavLink to={"/contact"}>Contact</NavLink>
        </div>);
}

export default Menu;