export const setCats = cats => {
    return{ 
        type: 'setCats',
        cats: cats,
    };
}

// export const setSelectedCat = clickedCat => {
//     return {
//         type: 'setSelectedCat',
//         cat : clickedCat,
//     }
// }

export function setSelectedCat(value) {
    return {
        type: 'setSelectedCat',
        cat: value
    };
}