import React, {useReducer} from 'react';
const initialstate = { count:0};
function reducer(state,action) {
    switch(action.type) {
        case'increment':
           return { count: state.count + 1};
        case 'decrement':
           return { count: state.count - 1};
        default:
            return state;
    }
}
function counter() {
    counst [state,dispatch]=useReducer(reducer,initialstate);
    return (
        <>
        <p>count: {state.count}</p>
        <button onclick ={()=> dispatch ({ type:'increment'})}>+</button>
        <button onclick ={()=> dispatch ({ type:'decrement'})}>-</button>
        </>
    );
}