import React from 'react';
import { useHistory } from "react-router-dom";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TileData from './TileData';

function Home() {
  const history = useHistory();

  const routeChange = () => {
    let path = `/page`;
    history.push(path);
  }

  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });
  

  return (
    <>
      <div className="top">
        <MyButton onClick={routeChange}>Hello World!</MyButton>
      </div>
      <TileData />
    </>
  );
}

export default Home;