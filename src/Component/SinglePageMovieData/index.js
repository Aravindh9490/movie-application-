import CustomHook from '../CustomHook'

const SinglePageMovieData = props => {
  const {
    match: {
      params: {id},
    },
  } = props

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=7962a0ea3a87eeeeff1d9679f2ddec82&language=en-US`
  const data = CustomHook(url, false)
  const e = data.apiData
  const updatedResult = {
    adult: e.adult,
    backdropPath: e.backdrop_path,
    belongsToCollection: e.belongs_to_collection,
    genres: e.genres,
    budget: e.budget,
    homepage: e.homepage,
    imdbId: e.imdb_id,
    id: e.id,
    originalLanguage: e.original_language,
    originalTitle: e.original_title,
    overview: e.overview,
    popularity: e.popularity,
    posterPath: e.poster_path,
    releaseDate: e.release_date,
    productionCompanies: e.production_companies,
    productionCountries: e.production_countries,
    revenue: e.revenue,
    runtime: e.runtime,
    spokenLanguages: e.spoken_languages,
    status: e.status,
    tagline: e.tagline,
    title: e.title,
    video: e.video,
    voteAverage: e.vote_average,
    voteCount: e.vote_count,
  }
  console.log(updatedResult)
  console.log(e)

  return (
    <div>
      <h1>{updatedResult.originalTitle}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${updatedResult.backdropPath}`}
        alt="img"
      />
      <p>{updatedResult.tagline}</p>
      <p>Vote:{updatedResult.voteAverage}</p>
    </div>
  )
}

export default SinglePageMovieData
