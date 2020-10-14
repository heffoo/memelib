import React from 'react';
import MEMES_INFO from './components/memes/memes'
import Sidebar from './components/Sidebar/Sidebar'
import Container from './components/Container/container'



import './App.scss';

function App() {
  return (
    
    <div className="App">
      <div className="forms-position">
      <Sidebar />
      <Container memes={MEMES_INFO}/>
      </div>
    </div>
  );
}

export default App;
