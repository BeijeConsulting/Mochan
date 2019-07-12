import React from 'react';
import ReactDOM from 'react-dom';
import SochanNetwork from './SochanNetwork';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SochanNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});
