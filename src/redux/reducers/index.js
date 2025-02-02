import { combineReducers } from 'redux';
import cartReducer from './cardReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
