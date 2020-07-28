import React from 'react';
import ReactDOM from 'react-dom';
import Tags from './Tags';

const slashes = window.location.pathname.split('/');
const gameid = slashes[slashes.length - 1].split('?')[0].split('#')[0] || 1;

ReactDOM.render(<Tags game={gameid} />, document.getElementById('user-tags'));
