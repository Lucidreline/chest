import React from 'react';
import './App.css';

// components
import Header from './components/header/header.component';
import ItemsPage from './components/pages/items-page/items-page.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <div id='margin-container'>
        <ItemsPage />
      </div>
    </div>
  );
}

export default App;
