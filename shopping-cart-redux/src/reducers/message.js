import * as Message from '../constants/Messages';
import * as Types from '../constants/ActionTypes'

let initState = Message.MSG_WELCOME;

const message = (state = initState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default:
            return [...state];

    }
};
export default message;