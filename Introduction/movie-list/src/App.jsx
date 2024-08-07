import MovieList from './Components/MovieList'
import './App.css'


function App() {
  const movies = [
    'The Matrix',
    'Man of Steel',
    'Lord of the Rings',
    'Case of Christ'
  ]
  return (
    <>
      <MovieList movies={movies} title="My movies"/>
    </>
  )
}

export default App
