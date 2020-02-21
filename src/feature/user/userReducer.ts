import { IUserItem, IUserAction, FETCH_USER_START_REQUEST, FETCH_USER_SUCESS, FETCH_USER_FAILURE, FETCH_USER_END_REQUEST } from './userTypes';
import { act } from 'react-dom/test-utils';

export interface IApplicationStateTree {
    user: IUserState
}

export interface IUserState {
    isLoading: boolean,
    users: IUserItem[],
    error: string;
    isExpired: boolean;
}

const initialState = {
    isLoading: true,
    users: [],
    error: "",
    isExpired: true,
}

export const userReducer = (state: IUserState = initialState, action: IUserAction ) : IUserState => {
    console.log('Action type:', action.type);
    switch (action.type){
        case FETCH_USER_START_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_USER_SUCESS:
            console.log('this is from reducer', action.users);
            return {
                isLoading: false,
                users: action.users,
                error: "",
                isExpired: false
            };
        case FETCH_USER_FAILURE:
            return {
                isLoading: false,
                users: [],
                error: "",
                isExpired: false,
            };
        case FETCH_USER_END_REQUEST:
                return {
                    ...state,
                    isLoading: false,
                    error: "",
                    isExpired: false,
                };
        default:
            return state;
    }
}

export default userReducer;