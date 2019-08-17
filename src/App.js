import React from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import Features from './containers/Features';
import Tours from './containers/Tours';
import Stories from './containers/Stories';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Main />
      <Features /> 
      <Tours />
      <Stories />
    </div>
  );
}

export default App;
