import React from 'react';
import "./App.css"

const Footer = () => {
  return (
    
   

    <div className='container-fluid footers py-2 '>
        <div className='row'>
            <div className='col-md-6 copyrights'>
                 <p> <i class="bi bi-c-square p-2"></i>Designed By: <a href='mailto:maheshsri1316@gmail.com'>Sri Harshini Foods</a></p>
            </div>

            <div className='col-md-6 display '>
                <div className='flex'>
                    <p>Follow us on:</p>
                </div>

                <div>
                <a href=''><i class="bi bi-facebook p-3"></i></a>
                <a href=''><i class="bi bi-instagram p-3"></i></a>
                <a href=''><i class="bi bi-twitter-x p-3"></i></a>
                <a href=''><i class="bi bi-youtube p-3"></i></a>
                </div>

            </div>


        </div>
    </div>


    
   
  )
}

export default Footer