const React = require('react');
const Default = require('./Default');

class BookIndex extends React.Component {
    render() {

        const { books } = this.props;
      

         return (
             <Default>
             <div>
                <div className="book-header-img">
                     <img src="#"/>
                 </div>
                 <div className="book-header">
                 <h1>Book Journal</h1>
                 </div>
                 <a href="books/booknew" className="log-book-new">Log a New Book</a>
                 <ul className="book-gallery">
                     {books.map((books, index) => {
                         return (
                             <li class-name="book-gallery-info">
                                 <div className="ind-book-img">
                                 <a href={`/books/${books._id}`}><img src={books.img} className="ind-book-img"/></a>
                                 </div>
                                 <p/>
                                 {/* {books.title} - Date Finished: {books.dateFinished} */}
                            </li>
                         )
                     })}
                 </ul>
                 <footer className="book-footer">
                     "All we have to decide is what to do with the time that is given us." - The Fellowship of the Ring, J.R.R. Tolkein
                 </footer>
                 
             </div>
             </Default>
         )
    }
}

module.exports = BookIndex;