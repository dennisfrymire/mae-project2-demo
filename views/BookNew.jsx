const React = require('react');
const Default = require('./Default');

class BookNew extends React.Component {
    render() {

         return (
             <Default>
             <div>
                 <h1>New Book Page</h1>
                 <form action="/books" method="POST">
                Title: <input type="text" name="title" /><br/>
                Author: <input type="text" name="author"/><br/>
                Genre: <input type="text" name="genre" /><br/>
                Year Released: <input type="number" placeholder="1985" name="yearReleased"/><br/>
                Date Finished: <input type="text" placeholder="May 1, 2020" name="dateWatched"/><br/>
                Image: <input type="text" placeholder="Copy and paste image URL here" name="img"/><br/>
                Review: <input type="text" name="review"/><br/>
                Rating: <input type="number" placeholder="1-5" name="rating"/><br/>
                  <input type="submit" name="" value="Log Book"/>
               </form>
             </div>
             </Default>
         )
    }
}

module.exports = BookNew;