// Imports the Card component from React Bootstrap
import Card from 'react-bootstrap/Card';

// Creates a component to display movie details
export default function MovieItem(props){

    // Displays the movie title, year and poster
    return(
        <div>
            <h1>{props.mymovie.Title}</h1>
            <p>{props.mymovie.Year}</p>
            <img src={props.mymovie.Poster}></img>
            
// Displays the movie information in a Bootstrap card
             <Card style={{ width: '200px', height: '200px' }}>
      <Card.Img variant="top" src={props.mymovie.Poster} />
   {/* Adds the movie title and year inside the card */}
                 <Card.Body>
        <Card.Title>{props.mymovie.Title}</Card.Title>
        <Card.Text>
         {props.mymovie.Year}
        </Card.Text>
      </Card.Body>
    
    </Card>
    </div>
    )
}
