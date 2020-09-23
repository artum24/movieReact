import * as axios from 'axios';
const API_KEY = 'api_key=3f4ca4f3a9750da53450646ced312397&language=ru'
const url = `https://api.themoviedb.org/3/`
const instance = axios.create({
    baseURL: url,
})


// Navbar
export const navbarAPI = {
    getGenras() {
        return instance.get(`genre/movie/list?${API_KEY}`)
        .then(responce => {
            return responce
        })
    }
}

//Movie
export const MovieApi = {
    getMovies(genre, sort,year,page) {
        return instance.get(`discover/movie?${API_KEY}&with_genres=${genre}&sort_by=${sort}&year=${year}&page=${page}`)
    },
    search(query,page) {
        return instance.get(`search/movie?${API_KEY}&query=${query}&page=${page}`)
    },
    getTabsMovie(name,page) {
        return instance.get(`movie/${name}?${API_KEY}&page=${page}`)
    }
    
}

// getDatailMovie
export const DetailMovie = {
    getDetailMovie(id) {
        return instance.get(`movie/${id}?${API_KEY}`)
    },
    getActorsMovie(id) {
        return instance.get(`movie/${id}/credits?${API_KEY}`)
    },
    getVideoMovie(id) {
        return instance.get(`movie/${id}/videos?${API_KEY}`)
    },
    getRecomendationMovie(id) {
        return instance.get(`movie/${id}/similar?${API_KEY}`)
    }
}

// actor
// /person/{person_id}
// /person/{person_id}/movie_credits