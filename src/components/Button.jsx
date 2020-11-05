import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

function MyButton() {
  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    lineHeight: 2.5,
    padding: '0 35px',
  });
  return (
    <MyButton>Hello World!</MyButton>
  )
}

export default MyButton;