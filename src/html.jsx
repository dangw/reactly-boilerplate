import React from 'react';
import ReactDOMServer from 'react-dom/server'

import App from './App';

export default class Html extends React.Component {

    render() {
        const app = ReactDOMServer.renderToString(<App data={this.props.data}/>);
        const data = "window.data = " + JSON.stringify(this.props.data) + ";";

        return (
            <html>
            <head>
                <title>Sample App</title>
            </head>
            <body>
            <div id="app" dangerouslySetInnerHTML={{__html: app}}></div>
            <script src="./vendor.js"></script>
            {this.props.dev ? <script src="./dev.js"></script> : null}
            <script dangerouslySetInnerHTML={{__html: data}}/>
            <script src="./client.js"></script>
            </body>
            </html>
        );
    }

}
