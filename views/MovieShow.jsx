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
                 <div className="show-image">
                 <img src={img}/>
                 </div>
                 <div className="movie-info">
                     Genre: {genre}<p/>
                     Year Released: {yearReleased}<p/>
                     Date Watched: {dateWatched}<p/>
                     Platform/Streaming Service: {platform}<p/>
                </div>
                <div className="review">
                    <h3>Review</h3>
                    Rating: {rating}<p/>
                    <div className="review-body">
                        {review}
                    </div>
                    <div className="edit-delete-form">
                    <form action={`/movies/${_id}/edit`}>
                    <input type="submit" value='Edit'/>
                    </form>
                    <form action={`/movies/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete from Journal"/>
                    </form>
                    </div>
                </div>
    

            
             </div>
             </Default>
         )
    }
}

module.exports = MovieShow;