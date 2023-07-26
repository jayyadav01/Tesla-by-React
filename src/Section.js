import React, { useState } from 'react'

function Section({image,head,par,leftbutton,rightbutton,arr}) {
  // const [button,setbutton] = useState(false);
  return (
    <>
    <section>
        <img id='bg' src={image}/>
        
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
