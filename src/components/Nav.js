import React, {useEffect, useState} from 'react';
import './Nav.css'


function Nav() {

const [show, handleShow] = useState(false)
   useEffect(() => {
     window.addEventListener('scroll',() => {
         if(window.scrollY > 100){
            handleShow(true)
         }else handleShow(false)
     });

     return () => {
       window.removeEventListener('scroll');
     };
   }, []);
   
  return (
  <div className={`navbar ${show && "navbar-sticky"}`}>
        <img className='navLogo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix logo" />
        <img className = 'navAvatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user logo" />
  </div>);
}

export default Nav      
