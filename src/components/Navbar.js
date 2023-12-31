import React from 'react';
import '../components/app.css';

export default function Navbar(props) {
  return (
    <>
      <header>
        <nav className={`navbar ${props.mode}`}>
          <ul className='nav'>
            <li><a className='nav-link' href="#html">{props.title}</a></li>
            <li><a className='nav-link' href="#html">HOME</a></li>
            <li><a className='nav-link' href="#html">ABOUT US</a></li>
            <div>
              <label className="switch">
                <input type="checkbox" onClick={props.togglemode} />
                <span className="slider round"></span>
              </label>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
  }