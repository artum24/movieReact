import axios from "axios";
const API_KEY = "api_key=3f4ca4f3a9750da53450646ced312397&language=ru";
const url = `https://api.themoviedb.org/3/`;

const instance = axios.create({
  baseURL: url,
});

export const navbarAPI = {
  getGenras() {
    return instance.get(`genre/movie/list?${API_KEY}`);
  },
};

export const MovieApi = {
  getMovies(genre: number, sort: string, year: number, page: number) {
    return instance.get(
      `discover/movie?${API_KEY}&with_genres=${genre}&sort_by=${sort}&year=${year}&page=${page}`
    );
  },
  search(query: string, page: number) {
    return instance.get(`search/movie?${API_KEY}&query=${query}&page=${page}`);
  },
  getTabsMovie(name: string, page: number) {
    return instance.get(`movie/${name}?${API_KEY}&page=${page}`);
  },
};

export const DetailMovie = {
  getDetailMovie(id: number) {
    return instance.get(`movie/${id}?${API_KEY}`);
  },
  getActorsMovie(id: number) {
    return instance.get(`movie/${id}/credits?${API_KEY}`);
  },
  getVideoMovie(id: number) {
    return instance.get(`movie/${id}/videos?${API_KEY}`);
  },
  getRecomendationMovie(id: number) {
    return instance.get(`movie/${id}/similar?${API_KEY}`);
  },
};

export const DetailActors = {
  getDetatilActor(id: number) {
    return instance.get(`person/${id}?${API_KEY}`);
  },
  getActorMovie(id: number) {
    return instance.get(`person/${id}/movie_credits?${API_KEY}`);
  },
  getActorImage(id: number) {
    return instance.get(`/person/${id}/images?${API_KEY}`);
  },
};
