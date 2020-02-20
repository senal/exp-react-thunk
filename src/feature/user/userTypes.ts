export const FETCH_USER_START_REQUEST = "FETCH_USER_START_REQUEST"; 
export const FETCH_USER_SUCESS = "FETCH_USER_SUCESS"; 
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE"; 
export const FETCH_USER_END_REQUEST = "FETCH_USER_END_REQUEST"; 


export interface IUserItem {
    id: string;
    name: string;
}

export class UserItem implements IUserItem {
    id: string = "";
    name: string = "";
}

export interface IUserAction {
    type: string ;
    users: Array<UserItem>;
    error: string;
    isExpired: boolean;
}