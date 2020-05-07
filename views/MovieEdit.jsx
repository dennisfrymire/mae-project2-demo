const React = require('react');
const Default = require('./Default');

class MovieEdit extends React.Component {
    render() {

        const { _id, title, genre, yearReleased, dateWatched, platform, img, review, rating } = this.props.movie;

      return (
          <Default>
          <div>
              <h1>Movie Edit Page</h1>
              <form action={`/movies/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title}/><br/>
                Genre: <input type="text" name="genre" defaultValue={genre}/><br/>
                Year Released: <input type="number" placeholder="1985" name="yearReleased" defaultValue={yearReleased}/><br/>
                Date Watched: <input type="text" placeholder="November 12, 1985" name="dateWatched" defaultValue={dateWatched}/><br/>
                Platform/Streaming Service: <input type="text" placeholder="Netflix" name="platform" defaultValue={platform}/><br/>
                Image: <input type="text" placeholder="Copy and paste image URL here" name="img" defaultValue={img}/><br/>
                Rating: <input type="number" placeholder="1-5" name="rating" defaultValue={rating}/><br/>
                Review: <input type="text" name="review" defaultValue={review}/><br/>
   
                
                  <input type="submit" name="" value="Log Movie"/>
               </form>
          </div>
          </Default>
          
          );
    }
  }

  module.exports = MovieEdit;