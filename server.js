import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import {Home} from 'edr/home.js';
import renderHtml from 'indexHtml.js';

let app = express();

// TODO move to a dedicated 'static' folder
app.use('/jspm_packages/system.js', handleStatic('jspm_packages/system.js'));
app.use('/jspm_packages/system.js.map', handleStatic('jspm_packages/system.js.map'));
app.use('/jspm.browser.js', handleStatic('jspm.browser.js'));
app.use('/jspm.config.js', handleStatic('jspm.config.js'));
app.use('/index.js', handleStatic('index.js'));
app.use('/build.js', handleStatic('build.js'));
app.use('/build.js.map', handleStatic('build.js.map'));
app.use('/static', express.static('/src/static'));

function handleStatic(filename) {
  return function(req, res) {
    res.sendFile('/src/' + filename);
  };
}

app.use(handleRender);

function handleRender(req, res) {
  let componentHTML = ReactDOMServer.renderToString(React.createElement(Home));
  res.send(renderHtml(componentHTML, {}));
};

app.listen('80', () => console.log('Listening on port 80'));
