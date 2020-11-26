export type GenresType = {
    id: number,
    name: string
}

export type MovieType = {
    adult: boolean|null,
    backdrop_path: string | null,
    genre_ids: Array<number> ,
    id: number,
    original_title: string | null,
    original_language: string | null,
    overview: string | null,
    popularity: number | null,
    poster_path: string | null,
    release_date: string,
    title: string,
    video: boolean | null,
    vote_average: number ,
    vote_count: number | null,
}

export type CompanisTypeType = {
    id: number | null,
    logo_path: string | null,
    name: string | null,
    origin_country: string | null
}
export type CountriesType = {
    iso_3166_1: string | null
    name: string | null
}

export type LanguageType = {
    iso_639_1: string | null,
    name: string | null
}
export type DetailMovieType = {
    status: string | null,
    spoken_languages: Array<LanguageType> | null,
    production_companies: Array<CompanisTypeType> | null,
    production_countries: Array<CountriesType> | null
    imdb_id: string | null,
    homepage: string | null,
    belongs_to_collection: string | null,
    adult: boolean|null,
    backdrop_path: string | null,
    id: number | null,
    original_title: string | null,
    original_language: string | null,
    overview: string | null,
    popularity: number | null,
    poster_path: string | null,
    release_date: string,
    title: string | null,
    video: boolean | null,
    vote_average: number ,
    vote_count: number | null,
    tagline: string | null
    genres: Array<GenresType>,
    budget: number | null,
    revenue: number | null,
    runtime: number | null
}

export type ActorType = {
    character: string | null,
    adult: boolean | null,
    also_known_as: Array<string>,
    biography: string,
    birthday: string | null,
    deathday: string | null,
    gender: number | null,
    homepage: string | null,
    id: number | null,
    imdb_id: string | null,
    known_for_department: string | null,
    name: string | null,
    place_of_birth: string | null,
    popularity: number | null,
    profile_path: string | null
}

export type ActorImagesType = {
    aspect_ratio: number | null,
    file_path: string | null,
    height: number | null,
    iso_639_1: string | null,
    vote_average: number | null,
    vote_count: number | null,
    width:number | null,
}

export type VideoType = {
    id: string | null,
    iso_639_1: string | null,
    iso_3166_1: string | null,
    key: string,
    name: string,
    site: string | null,
    size: number | null,
    type: string | null,
}