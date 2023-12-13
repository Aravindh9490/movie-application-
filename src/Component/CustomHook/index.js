import {useState, useEffect} from 'react'

const CustomHook = (url, cos = true) => {
  const [apiData, setApiData] = useState([])
  const [error, setError] = useState('')

  const convertTOCamelCasePopularMovies = e => ({
    adult: e.adult,
    backdropPath: e.backdrop_path,
    genreIds: e.genre_ids,
    id: e.id,
    originalLanguage: e.original_language,
    originalTitle: e.original_title,
    overview: e.overview,
    popularity: e.popularity,
    posterPath: e.poster_path,
    releaseDate: e.release_date,
    title: e.title,
    video: e.video,
    voteAverage: e.vote_average,
    voteCount: e.vote_count,
  })

  const getApiData = async () => {
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      if (cos) {
        const updatedData = data.results.map(e =>
          convertTOCamelCasePopularMovies(e),
        )
        setApiData(updatedData)
      } else {
        setApiData(data)
      }
    } else {
      setError('data not found')
    }
  }

  useEffect(() => {
    getApiData()
  }, [])

  return {apiData, error}
}

export default CustomHook
