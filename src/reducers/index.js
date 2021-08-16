import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
// import navReducer from './nav';

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  // nav: navReducer
});

export default rootReducer;