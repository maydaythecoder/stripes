import React from 'react'

const Paragraph = () => {
  return (
    <div>
      <div className='para'>
        <h1 id='para-head'>Adventure</h1>
         <p id='para-body'>
         Lorem ipsum dolor sit amet,<br/>
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br/>
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br/>
         ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit <br/>
         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/>
         sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
         <button className='btn' > <h2 className='btn-wrd'>Explore</h2>  </button>
      </div>
    </div>
  )
}

export default Paragraph
