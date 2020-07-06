import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import ViewBooks from './ViewBooks';
import ViewBook from './ViewBook';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ViewBooks} />
      <Route exact path="/books/:id" component={ViewBook} />
    </BrowserRouter>
  ) 
}

export default App;
