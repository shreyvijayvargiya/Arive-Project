import axios from 'axios';


const baseUrl = "https://jsonplaceholder.typicode.com"

export const getComments = async() => {
    const response = await axios.get(baseUrl + '/comments');
    return response;
};
