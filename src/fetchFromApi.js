// movies database api
export const API_URL = "https://moviesdatabase.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a1b059322cmsh5ad1e70806e094ap16eb27jsn34a43691a01a",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export const searchMovies = async (title) => {
  const response = await fetch(
    `${API_URL}/titles/search/title/${title}`,
    options
  );
  const data = await response.json();
  return data.results;
};
