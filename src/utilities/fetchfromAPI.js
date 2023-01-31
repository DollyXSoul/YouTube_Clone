const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchfromAPI = async (url) => {
    let data = await fetch(`${BASE_URL}/${url}`, options);

    data = await data.json();

    return data;

}