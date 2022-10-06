import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1 className="myclass">Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
root.render(<p>Hello</p>)