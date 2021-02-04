import moment from 'moment'

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
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

/**
 * @param {Array} array 
 */
export function addSlashToList (array) {
  return array.map( (genre)=> genre.name ).join(' / ')
}

export function formatDate(string) {
  return moment(new Date(string)).format('DD/MM/YYYY')
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/671?api_key=f4442253c9a33a6be3e17bad4298dec7&language=fr