import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Component/Home'
import Header from './Component/Header'
import TopRatedMovies from './Component/TopRatedMovies'
import UpcomingMovies from './Component/UpcomingMovies'
import SinglePageMovieData from './Component/SinglePageMovieData'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top-rated" component={TopRatedMovies} />
          <Route exact path="/upcoming" component={UpcomingMovies} />
          <Route exact path="/:id" component={SinglePageMovieData} />
        </Switch>
      </div>
    )
  }
}

export default App
