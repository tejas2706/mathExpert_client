const selectedFields = (state = {}, action) => {
    switch (action.type) {
        case 'SET_STD':
            state.standard = action.payload.standard;
            break;
        default:
            break;
    }
    return state;
};

export default selectedFields;
