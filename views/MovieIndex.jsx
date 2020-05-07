const React = require('react');
const Default = require('./Default');

class MovieIndex extends React.Component {
    render() {

        const { movies } = this.props;

         return (
             <Default>
             <div className="wrapper">
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
                            <li class-name="movie-gallery-info">
                            <div className="ind-movie-img">
                            <a href={`/movies/${movies._id}`}><img src={movies.img} className="ind-movie-img"/></a>
                            </div>
                            <p/>
                            {/* {movies.title} - Date Finished: {movies.dateFinished} */}
                       </li>
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