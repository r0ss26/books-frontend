import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import ViewBooks from './ViewBooks';
import ViewBook from './ViewBook';
import AddBook from './AddBook';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ViewBooks} />
      <Switch>
        <Route exact path="/books/new" component={AddBook} />
        <Route exact path="/books/:id" component={ViewBook} />
      </Switch>
    </BrowserRouter>
  ) 
}

export default App;
