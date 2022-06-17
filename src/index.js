import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('app'));

const elementoJsx = (
  <>
    <div className="container">
      <h1>Aprendiendo React usando JSX</h1>
      <h3>New Horizons</h3>
    </div>
    <div>div2</div>
  </>
);

const elementReact = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h1',
    null,
    'Aprendiendo React usando React.createElement'
  ),
  React.createElement('h3', null, 'New Horizons')
);

root.render(elementoJsx);
