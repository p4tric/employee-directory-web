import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// layout
import MainLayout from '@layout/MainLayout';

// component
import { EmployeeSearch, Overview } from '@modules';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route path="/" component={EmployeeSearch} exact />
        <Route path="/overview" component={Overview} key="/overview" exact />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
