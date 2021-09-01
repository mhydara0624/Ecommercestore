import React from 'react'


function Home(props) {
  return (
  
    <div className="home">
      <div>
        <img
          className='background' style={{ display: 'block', maxWidth: '100%' }}
          src="https://img.freepik.com/free-vector/modern-wavy-gradient-screensaver_79603-828.jpg?size=626&ext=jpg"
          
        />
      </div>
      <div>
        <h1>Rare Electronics</h1>
        <h2>
          The most exclusive Technology releases are only avaialble one place, That's here.
        </h2>
      </div>
    </div>
  )
}

export default Home
