const React = require('react');
const Default = require('./Default');

class AlbumShow extends React.Component {
    render() {

        const { _id, title, artist, genre, yearReleased, dateFinished, img, review, rating } = this.props.album;

         return (
             <Default>
             <div>
                 <div className="header">
                    <h1>{title} - {artist} ({yearReleased})</h1>
                 </div>
                 <div className="show-image">
                 <img src={img}/>
                 </div>
                 <p/>
                 <div className="album-info">
                     Genre: {genre}<p/>
                     Date Finished: {dateFinished}<p/>
                </div>
                <div className="review">
                    <h3>Review</h3>
                    Rating: {rating}<p/>
                    <div className="review-body">
                        {review}
                </div>
                    <div className="edit-delete-form">
                    <form action={`/albums/${_id}/edit`}>
                    <input type="submit" value='Edit'/>
                    </form>
                    <form action={`/albums/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete from Journal"/>
                    </form>
                    </div>
                </div>
    

            
             </div>
             </Default>
         )
    }
}

module.exports = AlbumShow;