import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './Tags';

const slashes = window.location.pathname.split('/');
const gameId = (slashes[slashes.length - 1].split('?')[0].split('#')[0]) || 1;

let serverRoot = 'http://44.233.13.178:3006';
// serverRoot = 'http://localhost:3006'; // comment out for prod

ReactDOM.render(<Tags game={gameId} server={serverRoot}/>, document.getElementById('user-tags'));
