const React = require('react');

class Default extends React.Component {
    render() {
        return (
        <html>
            <head>
            <link href="https://fonts.googleapis.com/css2?family=Acme&family=Montserrat&display=swap" rel="stylesheet"></link>
            <script src="https://kit.fontawesome.com/3bf8ed5b38.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="/css/style.css"/>
                {/* <a href="/index">Home</a> */}
                <nav class="main-nav">
            <ul>
                <li><a href="/index">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/books">Books</a></li>
                <li><a href="/albums">Albums</a></li>
            </ul>

        </nav>
                <title>Arts and Entertainment Journal</title>
            </head>
            <body>
                {this.props.children}
                <footer>

                </footer>
            </body>
        </html>
        )
    }
}

module.exports = Default;