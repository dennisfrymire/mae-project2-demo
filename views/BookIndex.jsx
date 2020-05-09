const React = require('react');
const Default = require('./Default');

class BookIndex extends React.Component {
    render() {

        const { books } = this.props;
      

         return (
             <Default>
             <div class="wrapper">
                 <div className="book-header">
                 <h1>Book Journal</h1>
                 </div>
                 
                 <ul className="book-gallery">
                     {books.map((books, index) => {
                         return (
                             <li class-name="book-gallery-info">
                                 <div className="ind-book-img">
                                 <a href={`/books/${books._id}`}><img src={books.img} className="ind-book-img"/></a>
                                 </div>
                                 <p/>
                            </li>
                         )
                     })}
                 </ul>
                 <a href="books/booknew" className="log-new"><h2>Log a New Book</h2></a>
                 <footer className="book-footer">
                     <h2>"All we have to decide is what to do with the time that is given us." ~ The Fellowship of the Ring, J.R.R. Tolkein</h2>
                 </footer>
                 
             </div>
             </Default>
         )
    }
}

module.exports = BookIndex;