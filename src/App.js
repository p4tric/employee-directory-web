import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// layout
import MainLayout from '@layout/MainLayout';

// component
import { Movies } from '@modules';
/*
        <Route path='/movies' component={Movies} />
*/
const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route path="*" component={Movies} exact />

      </MainLayout>

    </BrowserRouter>
  );
}

export default App;
