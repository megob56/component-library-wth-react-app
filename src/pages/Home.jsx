import React from 'react';
import NavBar from '../components/NavBar';
import TileData from '../components/TileData';
import Profile from '../components/Profile';

function Home() {

  return (
    <>
      <NavBar />
      <Profile />
      <TileData />
    </>
  );
}

export default Home;