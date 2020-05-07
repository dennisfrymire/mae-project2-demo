const React = require('react');
const Default = require('./Default');

class AlbumEdit extends React.Component {
    render() {

        const { _id, title, genre, yearReleased, dateFinished, img, review, rating } = this.props.album;

      return (
          <Default>
          <div>
              <h1>Album Edit Page</h1>
              <form action={`/albums/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title}/><br/>
                Genre: <input type="text" name="genre" defaultValue={genre}/><br/>
                Year Released: <input type="number" placeholder="1985" name="yearReleased" defaultValue={yearReleased}/><br/>
                Date Finished: <input type="text" placeholder="November 12, 1985" name="dateFinished" defaultValue={dateFinished}/><br/>
                Image: <input type="text" placeholder="Copy and paste image URL here" name="img" defaultValue={img}/><br/>
                Rating: <input type="number" placeholder="1-5" name="rating" defaultValue={rating}/><br/>
                Review: <input type="text" name="review" defaultValue={review}/><br/>
   
                
                  <input type="submit" name="" value="Edit Album"/>
               </form>
          </div>
          </Default>
          
          );
    }
  }

  module.exports = AlbumEdit;