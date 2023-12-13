import CustomHook from '../CustomHook'
import PopularMovies from '../PopularMovies'

const UpcomingMovies = () => {
  const url =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=7962a0ea3a87eeeeff1d9679f2ddec82&language=en-US&page=1'
  const result = CustomHook(url)

  console.log(result)
  return (
    <div>
      <PopularMovies movieData={result.apiData} category="Upcoming Movies" />
    </div>
  )
}

export default UpcomingMovies
