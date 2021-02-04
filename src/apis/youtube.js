import axios from 'axios';

const KEY = 'AIzaSyDYQgtsH9eyGKdvLE77pmOj5Jx-vOg1ntw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});