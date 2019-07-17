const initialState = {
    users: [],
    user: {},
    album: 0,
    albums:[],
    photos:[],
    active:0,
    posts: []
};


const postReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'LOAD_USERS':
            return {
                ...state,
                users: action.data
            }
        case 'LOAD_USER':
            return {
                ...state,
                user: action.data
            }
        case 'CHANGE_TAB':
            return {
                ...state,
                active: action.active
            }
        case 'LOAD_ALBUMS':
            return {
                ...state,
                albums: action.data
            }
        case 'LOAD_ALBUM':
            return {
                ...state,
                album: action.id
            }
        case 'LOAD_PHOTOS':
            return {
                ...state,
                photos: action.data
            }
        case 'LOAD_POSTS':
            return {
                ...state,
                posts: action.data.map((post)=> ({...post,comment:0,comments:[]}))
            }
        case 'LOAD_COMMENTS':
            return {
                ...state,
                posts: state.posts.map((post)=>post.id === action.id ? ({...post,comments:action.data,comment:1}) : post)
            }
        case 'HIDE_COMMENTS':
            return {
                ...state,
                posts: state.posts.map((post)=>post.id === action.id ? ({...post,comment:0}) : post)
            }
        default:
            return state;
    }
}
export default postReducer;