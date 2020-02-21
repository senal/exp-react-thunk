import { combineReducers } from 'redux' 
import userReducer, { userReducer as UserSate, IUserState, IApplicationStateTree } from './feature/user/userReducer';
import { IUserAction } from './feature/user/userTypes';


const rootReducer = combineReducers<IApplicationStateTree>({
    user: userReducer
});

export default rootReducer;
