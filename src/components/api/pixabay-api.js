import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImages(searchQuery, page) {
    return axios.get(`?key=38752753-3e559f3e5f741918923bcfb47&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
}