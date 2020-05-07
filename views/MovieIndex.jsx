const React = require('react');
const Default = require('./Default');

class MovieIndex extends React.Component {
    render() {

        const { movies } = this.props;

         return (
             <Default>
             <div>
                 <div className="movie-header-img">
                     <img src="#"/>
                 </div>
                 <div className="movie-header">
                 <h1>Movie Journal</h1>
                 </div>
                 <a href="movies/movienew" className="log-new-movie">Log New Recently Watched Movie</a>
                 <ul className="movie-gallery">
                     {movies.map((movies, index) => {
                         return (
                             <div className="movie-gallery-info">
                                 <a href={`/movies/${movies._id}`}>{movies.title} - Date Watched: {movies.dateWatched}
                                 <img src={movies.img} className="ind-movie-img"/></a>
                                 
                             </div>
                         )
                     })}
                 </ul>
                 <footer className="movie-footer">
                     "May the Force be with you." - Star Wars, 1977
                 </footer>
                 
             </div>
             </Default>
         )
    }
}

module.exports = MovieIndex;