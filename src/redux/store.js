import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
//创store对象np
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
export default store