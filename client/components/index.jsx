import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './Tags';

const slashes = window.location.pathname.split('/');
const gameId = (slashes[slashes.length - 1].split('?')[0].split('#')[0]) || 1;

// const serverRoot = 'http://44.233.13.178:3006'; //comment before git checkin to prod
// const serverRoot = 'http://localhost:3006'; // comment for dev

ReactDOM.render(<Tags game={gameId}/>, document.getElementById('user-tags'));
