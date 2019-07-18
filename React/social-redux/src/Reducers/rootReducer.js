const initialState = {
    users: [],
    albums: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USERS': return {...state,users: action.data};
        case 'GET_ALBUMS': return {...state,albums: action.data};
        default: return state;
    }
}

export default rootReducer