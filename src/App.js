import React, { Component } from 'react';
import './App.css';
import TopHeader from './components/topHeader.js';
import SideBar from './components/sideBar.js';
import PageContent from './components/pageContent.js';
	




class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <TopHeader />
      <SideBar />
      <PageContent />

        
      </div>
      
    );
  }
}

export default App;
