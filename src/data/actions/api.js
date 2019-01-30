import axios from '../../axios';

import { setCats } from './state';

export const getCats = () =>dispatch => {
    axios.get('/breeds').then(({ data })=> {
        const cats = data;
        console.log(cats);
        dispatch(setCats(cats));
    })
}