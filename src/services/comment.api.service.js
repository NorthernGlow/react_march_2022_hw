export class CommentApiService{
    _url = 'https://jsonplaceholder.typicode.com/comments';

    getComment(){
        return fetch(this._url).then(value => value.json());
    }
}