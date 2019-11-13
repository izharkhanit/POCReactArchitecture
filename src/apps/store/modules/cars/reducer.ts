import { ActionNames, ActionTypes } from './action';
import { State } from '../state';

export const initialState: State['cars'] = {
    value: 'some value from reducer',
    options: [],
    handleOnChange: () => { },
};

const reducer = (
    state = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case ActionNames.SUCCESS_CARS_DATA: {
            return { ...state, options: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer
