import React from 'react';
// import { useHistory } from "react-router-dom";
// import { CardMedia } from '@material-ui/core';
// import { styled, makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import NavBar from '../components/NavBar';
import TileData from '../components/TileData';
// import profPic from './assets/profile.jpg';
import Profile from '../components/Profile';

// const useStyles = makeStyles(() => ({
//   profile: {
//     padding: '0rem 0 5rem 20rem',
//     marginTop: '5rem',
//   },
//   profileImageDiv: {
//     float: 'left',
//     width: 'calc(15% - 1rem)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: '3rem',
//   },
//   profileImage: {
//     borderRadius: '50%',
//   },
//   profileSettings: {
//     marginTop: '1.1rem',
//     width: 'calc(66.666% - 2rem)',
//   },
//   profileUserName: {
//     display: 'inline-block',
//     fontWeight: 300,
//     padding: '0 50px 0 0',
//   },
//   profileStatsList: {
//     display: 'inline-block',
//     marginRight: '4rem',
//     lineHeight: 1.5,
//     cursor: 'pointer',
//   },
//   profileBio: {
//     float: 'left',
//     width: 'calc(80% - 1rem)',
//   },
// }));

function Home() {
  // const classes = useStyles();
  // const history = useHistory();

  // const routeChange = () => {
  //   let path = `/page`;
  //   history.push(path);
  // }

  // const MyButton = styled(Button)({
  //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  //   border: 0,
  //   borderRadius: 3,
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //   color: 'white',
  //   lineHeight: 2.5,
  //   padding: '0 35px',
  // });

  return (
    <>
      <NavBar />
      <div className="container">
        <Profile />
        {/* <div className={classes.profile}>
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
            <MyButton onClick={routeChange}>Hello World!</MyButton>
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
        </div> */}
      </div>

        <TileData />
    </>
  );
}

export default Home;