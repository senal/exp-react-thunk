import { combineReducers } from 'redux' 
import userReducer, { userReducer as UserSate } from './feature/user/userReducer';
import { IUserAction } from './feature/user/userTypes';


const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;
