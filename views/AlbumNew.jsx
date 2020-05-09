const React = require('react');
const Default = require('./Default');

class AlbumNew extends React.Component {
    render() {
       
         return (
             <Default>
             <div>
                 <h1>New Album Page</h1>
                 <form action="/albums" method="POST">
                Title: <input type="text" name="title" /><br/>
                Artist: <input type="text" name="artist"/><br/>
                Genre: <input type="text" name="genre" /><br/>
                Year Released: <input type="number" placeholder="1985" name="yearReleased"/><br/>
                Date Finished: <input type="text" placeholder="May 1, 2020" name="dateFinished"/><br/>
                Image (Grab a URL of the album cover from another website. Amazon usually works great.): <input type="text" placeholder="Copy and paste image URL here" name="img"/><br/>
                Rating: <input type="number" placeholder="1-5" name="rating"/><br/>
                Review: <input type="text" name="review"/><br/>
                <input type="submit" name="" value="Log Album"/>
               </form>
             </div>
             </Default>
         )
    }
}

module.exports = AlbumNew;