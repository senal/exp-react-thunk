import React, {useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import { fetchUsersSuccess, fetchUsersEndRequest } from '../feature/user/userActions';
import { fetchUsersFailure, fetchUsersStartRequest } from './../feature/user/userActions';
import { IApplicationStateTree } from './../feature/user/userReducer';

export const Home : React.FC<{}> = () => {

    const [users, isLoading, isExpired] = useSelector( (state : IApplicationStateTree ) => {
        const {users, isLoading, isExpired} = state.user;
        return [users, isLoading, isExpired]});

    const dispatch = useDispatch();

    useEffect(() => {
            const fetch = async () => {
                dispatch(fetchUsersStartRequest());
                console.log('IsExpired:', isExpired);
                if(isExpired){
                    console.log('Start fetching data');
                    try {
                        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
                        const users = result.data;
                        dispatch(fetchUsersSuccess(users, false));    
                    } catch (error) {
                        dispatch(fetchUsersFailure(error));
                    }                    
                 }
                }
            fetch();
            dispatch(fetchUsersEndRequest());
    }, []);
    console.log('isLoading', isLoading);
    return (
        
    <div>
        
      {
      isLoading ? <div>Loading data................</div> : <ul>{users && users.map(u => <li key={u.id}>{u.name}</li>)}</ul>}
       </div>);
}

export default Home;