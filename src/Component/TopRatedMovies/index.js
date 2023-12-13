import CustomHook from '../CustomHook'
import PopularMovies from '../PopularMovies'

const TopRatedMovies = () => {
  const url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=7962a0ea3a87eeeeff1d9679f2ddec82&language=en-US&page=1'
  const result = CustomHook(url)

  console.log(result)
  return (
    <div>
      <PopularMovies movieData={result.apiData} category="Top Rated Movies" />
    </div>
  )
}

export default TopRatedMovies
