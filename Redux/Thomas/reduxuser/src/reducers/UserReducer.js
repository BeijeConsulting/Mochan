const initialState = {
    users : [],
    user: {},
    posts: [],
    album : false
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            return {
                ...state,
                users : action.data
            };
        case 'LOAD_USER':
            return {
                ...state,
                user : action.data
            };
        case 'CHANGE_VIEW':
            return {
                ...state,
                album : action.data
            }
        case 'POST_LOAD':
            return {
                ...state,
                posts: action.data
            }
            default:
            return state;
    }
}

export default UserReducer