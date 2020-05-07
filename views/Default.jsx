const React = require('react');

class Default extends React.Component {
    render() {
        return (
        <html>
            <head>
            
                <link rel="stylesheet" href="/css/style.css"/>
                <a href="/index">Home</a>
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