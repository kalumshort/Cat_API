export default  (state, action) => {
    switch(action.type) {
        case 'setCats' : return setCats(state,action);
        case 'setSelectedCat': return setSelectedCat(state,action);
        default: return state;
    }
}

const setCats = (state, { cats }) => {
    return {
        ...state,
        cats: cats,
    }
}

const setSelectedCat = ( state, clickedCat ) => {
    return {
        ...state,
        cat: clickedCat,
    }
}