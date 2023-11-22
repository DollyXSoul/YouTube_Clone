const BASE_URL: string = "https://youtube-v31.p.rapidapi.com";

type URLOptionstype = {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
};

const options: URLOptionstype = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY as string,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchfromAPI = async (url: string) => {
  let data: Response = await fetch(`${BASE_URL}/${url}`, options);

  const parsedData = await data.json();

  return parsedData.items;
};
