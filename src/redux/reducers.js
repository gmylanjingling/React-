//reducers是函数，接收两个参数，是纯函数
import {combineReducers} from 'redux';
import {} from './actions';
const initState = 0;
function reducerOne(state=initState,action){
  switch (action.type){
    default:return state;
  }
}
const initState2 = {};
function
  reducerTwo(state=initState2,action){
  switch (action.type){
    default:return state;
  }
}
/*合并多个reducer，生成一个新的reducer
* 返回的状态，是包含所有状态的对象：{reducerOne}*/
export default combineReducers({
  reducerOne,
  reducerTwo
});
/*reducerOne等同于reducerOne:reducerOne*/