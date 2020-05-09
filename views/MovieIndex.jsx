const React = require('react');
const Default = require('./Default');

class MovieIndex extends React.Component {
    render() {

        const { movies } = this.props;

         return (
             <Default>
             <div className="wrapper">
                 <div className="movie-header">
                 <h1>Movie Journal</h1>
                 </div>
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
                 <a href="movies/movienew" className="log-new"><h2>Log New Movie</h2></a>
                 <footer className="movie-footer">
                     <h1>"May the Force be with you." - Star Wars, 1977</h1>
                 </footer>
                 
             </div>
             </Default>
         )
    }
}

module.exports = MovieIndex;