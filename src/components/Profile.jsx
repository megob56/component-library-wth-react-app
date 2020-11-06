import React from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MyButton from '../components/Button';
import profPic from './assets/profile.jpg';

const useStyles = makeStyles(() => ({
  profile: {
    // padding: '0rem 0 5rem 26rem',
    marginTop: '5rem',
    marginBottom: '5rem',
  },
  profileImageDiv: {
    float: 'left',
    width: 'calc(15% - 1rem)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3rem',
  },
  profileImage: {
    borderRadius: '50%',
  },
  profileSettings: {
    marginTop: '1.1rem',
    width: 'calc(66.666% - 2rem)',
  },
  profileUserName: {
    display: 'inline-block',
    fontWeight: 300,
    padding: '0 50px 0 0',
  },
  profileStatsList: {
    display: 'inline-block',
    marginRight: '4rem',
    lineHeight: 1.5,
    cursor: 'pointer',
  },
  profileBio: {
    float: 'left',
    width: 'calc(80% - 1rem)',
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <div className={classes.profileImageDiv}>
        <CardMedia 
            className={classes.profileImage}
            component="img"
            src={profPic}
            title="profile"
          />
      </div>
      <div className={classes.profileSettings}>
        <h1 className={classes.profileUserName}>Meaghan</h1>
        <MyButton />
      </div>
      <div className={classes.profileStats}>
        <ul>
          <li className={classes.profileStatsList}><strong>{Math.floor((new Date().getTime() - new Date("May 1, 1996").getTime()) / (1000 * 60 * 60 *24))}</strong> days in the US</li>
          <li className={classes.profileStatsList}><strong>{Math.floor((new Date().getTime() - new Date("March 13, 2019").getTime()) / (1000 * 60 * 60 *24))}</strong> days in the UK</li>
        </ul>
      </div>
      <div className={classes.profileBio}>
        <p><strong>Meaghan</strong> is a new developer, based in the UK but originally from the US</p>
      </div>
    </div>
  )
}
export default Profile;