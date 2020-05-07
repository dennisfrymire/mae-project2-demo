const React = require('react');
const Default = require('./Default');

class AlbumIndex extends React.Component {
    render() {
        const { albums } = this.props;
         return (
             <Default>
             <div>
             <div className="album-header-img">
                     <img src="#"/>
                 </div>
                 <div className="album-header">
                 <h1>Album Journal</h1>
                 </div>
                 <a href="albums/albumnew" className="log-album-new">Log New Album</a>
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
                 <footer className="album-footer">
                     "Love is not a victory march/it's a cold and it's a broken hallelujah" - Leonard Cohen, 'Hallelujah'
                 </footer>
                 
             </div>
             </Default>
         )
    }
}

module.exports = AlbumIndex;