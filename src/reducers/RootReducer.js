import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

const RootReducer = combineReducers({
  routing: routerReducer,
  toastr: toastrReducer
});

export default RootReducer;
