const API_KEY = 'd8c52828dea5f21be1ec4fe8e22d0003';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w600';

const genresMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};

const makeFetch = url => fetch(url)
  .then(response =>
    Promise.resolve(response.json())
      .then((json) => {
        if (response.ok) {
          return json;
        }

        throw new Error({ response, json });
      })
  );

const mapFilm = (movie) => {
  const casts = movie.credits ? movie.credits.cast.map(cast => cast.name)
    .slice(1, 15).toString() : [];
  const director = movie.credits ? movie.credits.crew
    .filter(crew => crew.department === 'Directing' && crew.job === 'Director')
    .sort((a, b) => a.id - b.id)[0] : [];
  const directors = movie.credits ? movie.credits.crew
    .filter(crew => crew.department === 'Directing' && crew.job === 'Director').map(dir => dir.name) : [];

  return {
    id: movie.id,
    title: movie.title,
    releaseYear: new Date(movie.release_date).getFullYear(),
    rating: movie.vote_average,
    genre: movie.genres ? genresMap[movie.genres[0].id] : genresMap[movie.genre_ids[0]],
    posterUrl: `${IMAGE_BASE_URL}/${movie.poster_path}`,
    duration: movie.runtime,
    description: movie.overview,
    casts,
    director,
    directors
  };
};

const mapDirector = (director) => {
  if (director.id) {
    return getFilmsByDirectorId(director.id);
  }

  return [];
};

const mapFilms = movies => movies.filter(movie => movie.poster_path).map(mapFilm);

export const getFilmsById = id => makeFetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
  .then(response => mapFilms([response])[0]);

export const getFilmsByQuery = query => makeFetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURI(query)}`)
  .then(response => mapFilms(response.results));

export const getFilmsByDirectorId = id => makeFetch(`${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`)
  .then(response => mapFilms(response.cast));

export const getFilmsByDirector = director => makeFetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURI(director)}`)
  .then(response => mapDirector(response.results[0]));

