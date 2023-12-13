import {Link} from 'react-router-dom'
import './index.css'

const PopularMovies = props => {
  const {movieData, category} = props

  const formatDate = dateString => {
    const options = {day: 'numeric', month: 'short', year: 'numeric'}
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="bg">
      <h1>{category}</h1>
      <ul className="popularMovie">
        {movieData.map(e => (
          <li key={e.id} className="poster-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${e.posterPath}`}
              alt={e.title}
              className="img-width"
            />
            <p className="title-style">{e.title}</p>
            <p>{e.voteAverage}</p>
            <p className="date">{formatDate(e.releaseDate)}</p>
            <Link to={`/${e.id}`}>
              <button type="button" className="btn btn-primary">
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PopularMovies
