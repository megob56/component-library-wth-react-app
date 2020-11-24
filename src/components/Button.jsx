import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

function MyButton() {
  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: '0.3rem',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    // lineHeight: 1.8,
    // padding: '0 2.4rem',
    marginTop: '1.2rem',
    // marginBottom: '1.25rem',
    // marginLeft: '2rem',
    fontWeight: 600,
  });

  const history = useHistory();

  const routeChange = () => {
    let path = `/page`;
    history.push(path);
  }

  return (
    <MyButton onClick={routeChange}>Hello World!</MyButton>
  )
}

export default MyButton;