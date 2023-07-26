import React, { useState } from 'react'

function Section({image,head,par,leftbutton,rightbutton,arr}) {
  return (
    <>
    <section style={{background : `url(${image})`}}>
        
          <div className='detail'>
            <div className='desc'>
              <h1>{head}</h1>
              <p>{par}</p>
            </div>
            
            <div className='button'>
                <a id='left' href=''>{leftbutton}</a>
                {
                  (rightbutton) ? <a id='right' href=''>{rightbutton}</a> : ''
                }
            </div>
            
            {
                (arr) ? <img id='downarr' src={arr}></img> : ''
            }
          </div>
    </section>    
    </>
  )
}

export default Section
