import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';

var urlBase = process.env.BASE_URL_REACT;

ReactDom.render(<App myBaseURL={urlBase} />, document.getElementById("root"))
