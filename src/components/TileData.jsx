import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';

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
    img:'https://images.unsplash.com/photo-1558470814-6409f3cf43c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Flag",
    author:"FKDJSEB",
    featured: true,
  },
  {
    img:'https://images.unsplash.com/photo-1502921982-f2471545c93b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Boston",
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
    img:'https://images.unsplash.com/photo-1531874668635-85a25b7279a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Home",
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
    img:'https://images.unsplash.com/photo-1578584722938-d272fd3dd89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: "Snow",
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
    img:'https://images.unsplash.com/photo-1503414382497-bfd17f3c2e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: "Summer Noms",
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
    img:'https://images.unsplash.com/photo-1580684744040-4b38f7f4c586?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: "The Breakers",
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
    img:'https://images.unsplash.com/photo-1530123985359-4fd0cce1ea8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: "Lighthouse",
    author:"SFKFBB",
    featured: true,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    height: 425,
    width: 450,
  },
  control: {
    padding: theme.spacing(2),
  },
  content: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    top: 0,
    position: 'absolute',
  },
}));

function TileData() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const history = useHistory();

  const routeChange = () => {
    let path = `/page`;
    history.push(path);
  }

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {tileDataArray.map((tile) => (
            <Grid key={tile.title} item>
              <img className={classes.image} src={tile.img} alt={tile.title} onClick={routeChange} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TileData;