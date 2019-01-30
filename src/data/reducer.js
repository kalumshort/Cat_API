export default (state, action) => {
    switch(action.type) {
        case 'setCats' : return setCats(state,action);
        default: return state;
    }
}

const setCats = (state, { cats }) => {
    return {
        ...state,
        cats: cats,
    }
}