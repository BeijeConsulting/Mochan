import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE
  } from '../actions';


const initialState = {
    active: 0,
    users : {
        items: [],
        loading: false,
        error: null
    },
    user: {
        items: {},
        loading: false,
        error: null
    },
    posts: {
        items: [],
        loading: false,
        error: null
    },
    album: 0,
    albums: {
        items: [],
        loading: false,
        error: null
    },
    photos: {
        items: [],
        loading: false,
        error: null
    } 
};

export default function fetchReducer(state = initialState,action) {
    var node = action.node;
    if (node==='comments' && action.type===FETCH_SUCCESS){
        return {
            ...state,
            posts: {
                ...state,
                loading: false,
                items: state.posts.items.map((post) => post.id === action.id ? ({...post,comment:1,comments:action.payload.data}) : post) 
            }
        };
    }
    switch(action.type) {
        case FETCH_BEGIN:
            return {
                ...state,
                [node]: {
                    ...node,
                    loading: true,
                    error: null
                }
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                [node]: {
                    ...node,
                    loading: false,
                    items: (node==='posts') ? (action.payload.data.map((post) => ({...post,comment:0,comments:[]}))) : action.payload.data
                }
            };
        case FETCH_FAILURE:
            return {
                ...state,
                [node]: {
                    items: [],
                    loading: false,
                    error: action.payload.error
                }
            };
        case 'HIDE_COMMENTS':
            return {
                ...state,
                posts: {
                    ...state,
                    loading: false,
                    items: state.posts.items.map((post)=>post.id === action.id ? ({...post,comment:0}) : post) 
                }
            } 
        case 'CHANGE_TAB':
            return {
                ...state,
                active: action.active
            }
        case 'LOAD_ALBUM':
            return {
                ...state,
                album: action.id
            }
        default:
            return state;
        }
    }