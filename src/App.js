import React from 'react';
import Header from './containers/Header';
import Layout from './containers/Layout';
import Main from './containers/Main';
import Features from './containers/Features';


function App() {
  return (
    <div className="App">
      <Header /> 
      {/* <Layout />      */}
      <Main />
      <Features /> 
    </div>
  );
}

export default App;
