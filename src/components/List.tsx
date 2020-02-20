import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { IUserItem } from '../feature/user/userTypes';

export const List : React.FC<{}> = (props: {}) => {

    const users = useSelector( (state) => {
        const x = state as {user : {
                isLoading: boolean,
                users:IUserItem[],
                error: string,
            }}
        console.log("from selector", x.user.users );
        return x.user.users});

    console.log('List', 'loading...');
    return (
    <div> <ul>
        {users && users.map(u => <li key={u.id}>{u.name}</li>)}
        </ul></div>);
}

export default List;