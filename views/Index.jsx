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
                       
                     {/* <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/11/getty_watching_movie.jpg" className="index-img"/> */}

                     
                    </div>
                    <div className="book-index">
                    <a href="/books"><h1>Books</h1></a>
                     {/* <img src="https://media.treehugger.com/assets/images/2015/01/paper_book_folded_in_heart_shape.jpg.860x0_q70_crop-scale.jpg" className="index-img"/> */}
                    {/* <a href="/books" class="btn">Books</a> */}
                    </div>

                    <div className="album-index">
                    <a href="/albums"><h1>Albums</h1></a>

                     {/* <img src="https://mk0lifedatacorpyd3vq.kinstacdn.com/wp-content/uploads/2016/07/head-phones.jpeg" className="index-img"/> */}
                    {/* <a href="/albums" class="btn">Albums</a> */}
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