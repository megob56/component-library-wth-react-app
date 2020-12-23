import React from 'react';
import NavBar from '../components/NavBar';

function Page() {

  return (
    <>
      <div className="js-nav-bar-div" style={{marginBottom: '1rem', padding: '15px'}}>
        <NavBar />
      </div>
      <h1>Page</h1>
    </>
  )
}

export default Page;