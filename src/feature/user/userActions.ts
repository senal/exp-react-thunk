import {  
    FETCH_USER_START_REQUEST, 
    FETCH_USER_SUCESS, 
    FETCH_USER_FAILURE,
    IUserItem,
    IUserAction,
    FETCH_USER_END_REQUEST,
} from './userTypes';


export const fetchUsersStartRequest = () : IUserAction =>{
    return {
        type: FETCH_USER_START_REQUEST,
        users: [],
        error: "",
        isExpired: false
    }
}

export const fetchUsersSuccess = (users: IUserItem[], isExpired:boolean) : IUserAction => {
    return {
        type: FETCH_USER_SUCESS,
        users: users,
        error: "",
        isExpired: isExpired
    }
}

export const fetchUsersFailure = (error: string) : IUserAction => {
    return {
        type: FETCH_USER_FAILURE,
        users: [],
        error: error,
        isExpired: false,
    }
}

export const fetchUsersEndRequest = () : IUserAction => {
    return {
        type: FETCH_USER_END_REQUEST,
        users: [],
        error: "",
        isExpired: false,
    }
}
