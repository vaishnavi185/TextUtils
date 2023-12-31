import React, { useState } from 'react';

import '../components/app.css'; 


export default function Textform(props) {
    const upper=()=>{
        console.log("upper"+text);
         let newtext= text.toUpperCase();
        setText(newtext);
    }
    const[mystyle,setmystyle]=useState( {
        backgroundColor:'black',
        color:'white'
    })
    const change =()=>{
        if(mystyle.color=='white'){
            setmystyle({
                backgroundColor:'white',
                color:'black'
            })
        }
        else{
            setmystyle(
                {
                    backgroundColor:'black',
                    color:'white'
                }

            )
        }
    }
   
    const lower=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const capital=()=>{
        let newtext= text.charAt(0).toUpperCase()+text.slice(1);
        setText(newtext);
    }
    const handle=(event)=>{
        console.log("upper");
        setText(event.target.value)
    }
    

    const[text , setText ] = useState("enter text");
  return (
    <div >
        <h1 className='h'>{props.heading}</h1>
       <div className='container' style={mystyle}>
       <textarea className='box'rows={6} value={text} onChange={handle}style={mystyle}></textarea>
       </div>
    <ul className='list'>
        <li><button className='b' onClick={upper}>UpperCase</button></li>
        <li><button className='b' onClick={lower}>LowerCase </button></li>
        <li><button className='b' onClick={capital}>capitalize</button></li>

    </ul>
    <div className='con'>
           <h2>YOUR WORD</h2>
           <p><b>{text.split(' ').length}</b> words are enterd , <b>{text.length}</b> character are enterd</p>
           <p><b>{0.008*text.split(' ').length} </b>reading word time</p>

    </div>
    <div className='pre'>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>
   
    
    
    </div>
  )
}
