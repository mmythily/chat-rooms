import React from 'react';
import './App.css';
import MessagesList from './components/MessagesList'
import MessageInput from './components/MessageInput'

function App() {
  return (
    <div className='app'>
      <MessagesList />
      <MessageInput />
    </div>
  );
}

export default App;
