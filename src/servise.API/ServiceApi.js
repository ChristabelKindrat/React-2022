class serviceApi {

    _baseUrl= 'https://jsonplaceholder.typicode.com';

    getPosts(){ return fetch(this._baseUrl + '/posts')
        .then(value => value.json());
    }
    getComments(){ return fetch(this._baseUrl + '/comments')
        .then(value => value.json());
    }
}
export default serviceApi;

