import { connect } from 'react-redux'
import { store } from '../index'

export function getData(page) {    

    let fetchUrl = 'http://jsonplaceholder.typicode.com/' + page;
    let urlParam = window.location.href.split('?')[1];
    let actionType = 'GET_' + page.toUpperCase();

    fetchUrl += urlParam ? ('?' + urlParam) : '';

    return fetch(fetchUrl)
    .then(res => res.json())
    .then(json => store.dispatch({type: actionType, data: json}));
}

export default connect()(getData);