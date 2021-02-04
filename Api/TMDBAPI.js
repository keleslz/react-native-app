const API_TOKEN = 'f4442253c9a33a6be3e17bad4298dec7';

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&page=${page}&query=${text}`;
  // console.log(page)
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getDetailFilmFromApi (id) {
  const url = `https://api.themoviedb.org/3/search/movie/${id}?api_key=${API_TOKEN}&language=fr`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}