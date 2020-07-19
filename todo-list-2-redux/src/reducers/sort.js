import * as types from './../constants/ActionTypes';

let initState = {
    by: 'name',
    value: 1 // 1 : tăng, -1 : giảm
};
let myReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by: action.sort.by,
                value: action.sort.value
            };
        default:
            return state;
    }
};

export default myReducer;