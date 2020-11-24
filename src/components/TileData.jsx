import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const tileDataArray = [
  {
    img:'https://images.unsplash.com/photo-1546993641-097e8366bba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "THE ZA",
    author:"HGJHGJH",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1559856182-ebf681b5767a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Dunks",
    author:"ALJIFHE",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1587339144367-f1cacbecac82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Pancakes, 'Murica Style",
    author:"ALJIFHE",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1502921982-f2471545c93b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Boston",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1531874668635-85a25b7279a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Home",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1543336414-319b2b916cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Boston Public Library",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1583354344092-dcf7e164cab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Fenway Park",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1532994878583-a553d1abdd51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Red Sox",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1602187956602-576d568cd959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Tom Brady",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1520853290592-81017d2bde21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Skiing",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://i.pinimg.com/originals/4a/a6/35/4aa635ffcefc105e01ccd43987aa30b8.jpg',
    title: "Mount Washington",
    author:"FKDJSEB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1462117580841-44df9d9d23fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Bean Boots",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1512919055121-bb04259a6188?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Apple Picking",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1543017094-f56b02c31b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Covered Bridge",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://newengland.com/wp-content/uploads/PleasantLake-Exterior-Patio-1.jpg',
    title: "Adirondack Chairs",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1503414382497-bfd17f3c2e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: "Summer Noms",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://www.spendwithpennies.com/wp-content/uploads/2018/01/New-England-Clam-Chowder-3.jpg',
    title: "Clam Chowder",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://lh3.googleusercontent.com/FnlEUHtf736wtNC-4Tm-LGFFJmjfzHsAXQNzc4zgG92Sd9_wI3jTAYZNFB6eY6JCZsm0y9Y8=w1080-h608-p-no-v0',
    title: "Del's",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1563072140-03147ef5cf19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "S'mores",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1577426638753-b3a5d049d21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Acadia National Park",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1598966915016-92aa352b8242?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Sand Beach, ME",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://www.boston.com/wp-content/uploads/2019/09/breakersmansion-850x478.jpg',
    title: "The Breakers",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1530123985359-4fd0cce1ea8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: "Lighthouse",
    author:"SFKFBB",
    featured: true,
  },
  {
    img:'https://i.pinimg.com/originals/19/c1/52/19c15256011165b53009e8a4213941a0.jpg',
    title: "Narragansett Beach",
    author:"SFKFBB",
    featured: true,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
   container: {
    maxWidth: '93.5rem',
    margin: 'auto',
    padding: '2rem',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '-1rem -1rem',
    paddingBottom: '3rem',
  },
  galleryItem: {
    position: 'relative',
    // flex: '1 0 22rem',
    width: '350px',
    height: '350px',
    margin: '1rem',
    color: '#fff',
    cursor: 'pointer',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

function TileData() {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () => {
    let path = `/page`;
    history.push(path);
  }

  return (
    <div className={classes.container}>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            {tileDataArray.map((tile) => (
              <Grid key={tile.title} className={classes.galleryItem} item>
                <img className={classes.galleryImage} src={tile.img} alt={tile.title} onClick={routeChange} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default TileData;