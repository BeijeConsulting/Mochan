export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchBegin = (node,id) => ({
    type: FETCH_BEGIN,
    node : node,
    id: id
});

export const fetchSuccess = (data,node,id) => ({
    type: FETCH_SUCCESS,
    payload: { data },
    node: node,
    id: id
});

export const fetchFailure = (error,node,id) => ({
    type: FETCH_FAILURE,
    payload: { error },
    node: node,
    id: id
});

export function fetchData(url,node,id) {
    return dispatch => {
      dispatch(fetchBegin(node,id));
      return fetch(url)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchSuccess(json,node,id));
          return json;
        })
        .catch(error => dispatch(fetchFailure(error,node,id)));
    };
}
  
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const hideComments = (id) => ({
    type: 'HIDE_COMMENTS',
    id : id
})

export const loadAlbum = (id) => ({
    type : 'LOAD_ALBUM',
    id : id
})

export const changeTab = (i) => ({
    type:'CHANGE_TAB',
    active: i
})