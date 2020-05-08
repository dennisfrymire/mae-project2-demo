const React = require('react');
const Default = require('./Default');

class MovieShow extends React.Component {
    render() {

        const { _id, title, genre, yearReleased, dateWatched, platform, img, review, rating } = this.props.movie;

         return (
             <Default>
             <div>
                 <div className="header">
                    <h1>{title} ({yearReleased})</h1>
                 </div>
                 <div className="show-image-container">
                 <img src={img} className="show-image"/>
                 </div>
                 <div className="info">
                     Genre: {genre}<p/>
                     Year Released: {yearReleased}<p/>
                     Date Watched: {dateWatched}<p/>
                     Platform/Streaming Service: {platform}<p/>
                </div>
                <div className="review">
                    <p>Review: {review}</p>
                    <p>Rating: {rating}</p>
                </div>
                    <div className="edit-delete-form">
                    <form action={`/movies/${_id}/edit`}>
                    <input type="submit" value='Edit' className="edit-button"/>
                    </form>
                    <form action={`/movies/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete from Journal" className="delete-button"/>
                    </form>
                    </div>
                </div>
    

            
             {/* </div> */}
             </Default>
         )
    }
}

module.exports = MovieShow;