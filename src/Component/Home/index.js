import {Component} from 'react'
import PopularMovies from '../PopularMovies'

import './index.css'

class Home extends Component {
  state = {apiData: []}

  componentDidMount() {
    this.getApiData()
  }

  convertTOCamelCasePopularMovies = e => ({
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

  getApiData = async () => {
    const APIKey = '7962a0ea3a87eeeeff1d9679f2ddec82'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const updatedApiData = data.results.map(e =>
        this.convertTOCamelCasePopularMovies(e),
      )
      //   console.log(updatedApiData)
      this.setState({apiData: updatedApiData})
    }
  }

  render() {
    const {apiData} = this.state
    console.log(apiData)
    return (
      <div>
        <PopularMovies movieData={apiData} category="Popular" />
      </div>
    )
  }
}

export default Home
