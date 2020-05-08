const React = require('react');
const Default = require('./Default');

class Home extends React.Component {
    render() {

         return (
             <Default>
             <div className="wrapper">
                 {/* <div className="home-header-img">
                     
                 </div> */}
                 <div classname="home-header">
                     <div className="showcase">
                 <h1>Arts and Entertainment Journal</h1>
                    </div>
                 </div>
                 <div className="index-nav">
                    <div className="movie-index">
                        <a href="/movies"><h1>Movies</h1></a>
                       
                    

                     
                    </div>
                    <div className="book-index">
                    <a href="/books"><h1>Books</h1></a>
                
                    </div>

                    <div className="album-index">
                    <a href="/albums"><h1>Albums</h1></a>

                    
                 </div>
                 </div>
                 <footer className="index-footer">
                 <h2>"My imagination can picture no fairer happiness than to continue living for art." ~ Clara Schumann
                 </h2>
                 </footer>
             </div>

             </Default>
         )
    }
}

module.exports = Home;