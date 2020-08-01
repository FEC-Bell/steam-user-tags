import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './Tags';

const slashes = window.location.pathname.split('/');
const gameId = (slashes[slashes.length - 1].split('?')[0].split('#')[0]) || 1;

ReactDOM.render(<Tags game={gameId} />, document.getElementById('user-tags'));
