/**
 * initial auth user
 */
import {APP_SET_NAVIGATION} from "../actions";


const carBrands = [
    'Mercedes',
    'BMW',
    'Cadillac',
    'Peugeot',
    'Car brand 1',
    'Car brand 2',
    'Car brand 3',
    'Car brand 4',
    'Car brand 5',
    'Car brand 6',
    'Car brand 7',
    'Car brand 8',
    'Car brand 9',
    'Car brand 10',
    'Car brand 11',
    'Car brand 12',
    'Car brand 13',
    'Car brand 14',
];

const INITIAL_STATE = {
    carBrands:carBrands,
    navigation: null
};

export default (state = INITIAL_STATE, action) => {

    const {type, payload} = action;

    switch (type) {
        case APP_SET_NAVIGATION:{
            return {...state, navigation: payload.navigation}
        }
        default: return { ...state };
    }
}
