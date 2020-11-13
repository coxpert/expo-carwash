export const APP_SET_NAVIGATION = 'APP_SET_NAVIGATION';

export const appSetNavigation = (navigation) => (dispatch) => {
    dispatch({type:APP_SET_NAVIGATION, payload: navigation})
}