const React = require('react');
const Default = require('./Default');

class Home extends React.Component {
    render() {

         return (
             <Default>
             <div>
                 <div className="home-header-img">
                     <img src="#"/>
                 </div>
                 <div classname="home-header">
                 <h1>Arts and Entertainment Journal</h1>
                 </div>
                 <div className="index-movie-img">
                     <img src="#"/>
                 </div>
                 <div className="index-movie">
                 <a href="/movies">Movies</a>
                 </div>
                 
                 <div className="index-book-img">
                 <img src="#"/>
                 </div>
                 <div className="index-book">
                 <a href="/books">Books</a>
                 </div>

                 <div className="index-album-img">
                     <img src="#"/>
                </div>
                <div className="index-album">
                 <a href="/albums">Albums</a>
                 </div>
             </div>

             </Default>
         )
    }
}

module.exports = Home;