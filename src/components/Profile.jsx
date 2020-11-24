import React from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import MyButton from '../components/Button';
import profPic from './assets/profile.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  items: {
    padding: theme.spacing(2),
  },
  profileImage: {
    verticalAlign:'middle',
    width: '183px',
    height: '183px',
    borderRadius: '50%',
  },
}));

function Profile() {
  const classes = useStyles();

  return (
  <div style={{ width: '100%'}}>
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Box>
        <CardMedia 
          className={classes.profileImage}
          component="img"
          src={profPic}
          title="profile"
        />
      </Box>
      <Box>
        <Box 
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
        >
          <Box>
            <Typography variant="h4" className={classes.items}>Meaghan</Typography>
          </Box>
          <Box>
            <MyButton />
          </Box>
        </Box>
        <Box 
          display="flex"
          flexDirection="row"
        >
          <Box>
            <Typography variant="subtitle1" className={classes.items}><strong>{Math.floor((new Date().getTime() - new Date("May 1, 1996").getTime()) / (1000 * 60 * 60 *24))-(Math.floor((new Date().getTime() - new Date("March 13, 2019").getTime()) / (1000 * 60 * 60 *24)))}</strong> days in the US</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.items}><strong>{Math.floor((new Date().getTime() - new Date("March 13, 2019").getTime()) / (1000 * 60 * 60 *24))}</strong> days in the UK</Typography>
          </Box>
        </Box>
        <Box 
          display="flex"
        >
          <Typography variant="body1" className={classes.items}><strong>Meaghan Elizabeth O'Brien</strong> <br /> Web Developer. Based in the UK but originally from the US</Typography>
        </Box>
      </Box>
    </Box>
    
  </div>
  )
}
export default Profile;