export default function GetData(elements) {
    const fetchUrl = 'http://jsonplaceholder.typicode.com/' + elements;

    return fetch(fetchUrl)
        .then(res => res.json())
        .then(json => {
            return json;
        })
}