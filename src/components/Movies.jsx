// Imports the MovieItem component to display individual movies
import MovieItem from "./MovieItem";

// Creates a Movies component that receives movie data through props
export default function Movies(props) {
 // Uses map() to loop through each movie in the movies array 
  return props.movies.map(
    (movie) => {
      // Shows each movie and gives it a unique key
        return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
    }
  )
}
