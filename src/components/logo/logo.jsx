import React from 'react';
import logo from './logo.png';
import './logo.less';
export default function Logo (){
   return (
     <div className='logoContainer'><img src={logo} alt="logo" className='logo-img'/></div>
   )
 }