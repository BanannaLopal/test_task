import React from 'react';
import CSS from './App.module.scss';
import { UserRatingsPage } from './pages';

function App() {
  return (
    <div className={CSS.App}>
      <UserRatingsPage/>
    </div>
  );
}

export default App;
