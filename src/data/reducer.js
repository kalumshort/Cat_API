export default  (state, action) => {
    switch(action.type) {
        case 'setCats' : return setCats(state,action);
        case 'setSelectedCat': return{...state, DisplayCat: action.cat};
        default: return state;
    }
}

const setCats = (state, { cats }) => {
    return {
        ...state,
        cats: cats,
    }
}
