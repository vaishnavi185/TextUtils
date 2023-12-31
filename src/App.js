import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

export default function App(props) {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
    console.log(mode); // Add this line
  };
  

  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <div className='container'>
        <Textform heading="Enter Text " />
      </div>
    </>
  );
}