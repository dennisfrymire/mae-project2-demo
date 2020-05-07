const React = require('react');
const Default = require('./Default');

class Home extends React.Component {
    render() {

         return (
             <Default>
             <div className="wrapper">
                 <div className="home-header-img">
                     <img src="#"/>
                 </div>
                 <div classname="home-header">
                     <div className="showcase">
                 <h1>Arts and Entertainment Journal</h1>
                    </div>
                 </div>
                 <div className="index-nav">
                    <div className="movie-index">
                       
                     <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/11/getty_watching_movie.jpg" className="index-img"/>

                     <a href="/movies" class="btn">Movies</a>
                    </div>
                    <div className="index-book">
                     <img src="https://media.treehugger.com/assets/images/2015/01/paper_book_folded_in_heart_shape.jpg.860x0_q70_crop-scale.jpg" className="index-img"/>
                    <a href="/books" class="btn">Books</a>
                    </div>

                    <div className="index-album">
                     <img src="https://mk0lifedatacorpyd3vq.kinstacdn.com/wp-content/uploads/2016/07/head-phones.jpeg" className="index-img"/>
                    <a href="/albums" class="btn">Albums</a>
                 </div>
                 </div>
             </div>

             </Default>
         )
    }
}

module.exports = Home;