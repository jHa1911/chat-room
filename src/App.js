import React from 'react';
import './App.css';
import AddMessage from './components/AddMessage';
import Sidebar from './components/Sidebar';
import MessagesList from './components/MessagesList';

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id='main'>
        <MessagesList />
        <AddMessage />
      </section>
      
      
    </div>
  );
}

export default App;
