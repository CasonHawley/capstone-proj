import React from 'react';

const Header =()=>{
    const message =["WELCOME TO MY <CODE/>",];
    let i =0 ;
    let jsxArray = [];
    for(i=0; i<message.length;i++){
      jsxArray.push(
        <div className='background'>
          <h1 className="typewriter">
              {message[i]}    
          </h1>
        </div>
       );
    }
    return jsxArray;
  }

export default Header;