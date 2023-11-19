import React from 'react';
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className='footer text-center'>
       <div className="footer-container pt-4 pb-4">
       <a className='pb-5 fs-6' href="mail-to:ajalapeter1@gmail.com">ajalapeter1@gmail.com</a> <br />
        <a className='p-4 fs-2' href="https://github.com/timexdev"><i class="bi bi-github"></i></a>
        <a className='p-4 fs-2' href="https://www.linkedin.com/in/peter-ajala/"><i class="bi bi-linkedin"></i></a> 
        
       </div>
    </div>
  )
}

export default Footer