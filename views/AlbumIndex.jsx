const React = require('react');
const Default = require('./Default');

class AlbumIndex extends React.Component {
    render() {
        const { albums } = this.props;
         return (
             <Default>
             <div>
                 <div className="showcase-album">
                 <h1>Album Journal</h1>
                 </div>
                 
                 <ul className="album-gallery">
                     {albums.map((albums, index) => {
                         return (
                        <li class-name="album-gallery-info">
                         <a href={`/albums/${albums._id}`}>
                            <img src={albums.img} className="ind-album-img"/></a>
                                 
                        </li>
                         )
                     })}
                 </ul>
                 <a href="albums/albumnew" className="log-new"><h2>Log New Album</h2></a>
                 <footer className="album-footer">
                     <h2>"Love is not a victory march/it's a cold and it's a broken hallelujah" ~ Leonard Cohen, 'Hallelujah'</h2>
                 </footer>
                 
             </div>
             </Default>
         )
    }
}

module.exports = AlbumIndex;