import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import {
	Link,
	Typography,
	Box,
	Grid,
	AppBar,
	Toolbar,
	Breadcrumbs,
	List,
	ListItem,
	ListItemText,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const storeMerchandise = new Array(12).fill({
	img:
		"https://images.unsplash.com/photo-1462117580841-44df9d9d23fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
	title: "Bean Boots",
	author: "SFKFBB",
	featured: true,
	linkTo: "shop-showcase",
});

const drawerWidth = 600;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: "2rem",
	},
	grow: {
		flexGrow: 1,
	},
	mainHeading: {
		marginRight: theme.spacing(2),
		flexGrow: 0.5,
	},
	navLinks: {
		margin: theme.spacing(2),
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
		marginRight: theme.spacing(50),
	},
	gallery: {
		display: "flex",
		flexWrap: "wrap",
		margin: "-1rem -1rem",
		paddingBottom: "3rem",
	},
	galleryItem: {
		position: "relative",
		width: "250px",
		height: "250px",
		margin: "1rem",
		color: "#fff",
		cursor: "pointer",
	},
	galleryImage: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
}));

export default function Shop() {
	const classes = useStyles();

	const [sortBy, setSortBy] = React.useState("Price: High to Low");
	const [itemsPerPage, setItemsPerPage] = React.useState(24);

	const handleSortByChange = (e) => {
		setSortBy(e.target.value);
	};

	const handleNumberOfItemsChange = (e) => {
		setItemsPerPage(e.target.value);
	};

	return (
		<>
			<div
				className="js-nav-bar-div"
				style={{ marginBottom: "1rem", padding: "15px" }}
			>
				<NavBar />
			</div>
			<div className={classes.root}>
				<hr />
				<Box width="100%">
					<AppBar position="F">
						<Toolbar>
							<Typography variant="h3" className={classes.mainHeading}>
								SHOP
							</Typography>
							<Typography variant="h6" className={classes.navLinks}>
								<Link color="white">SHOES</Link>
							</Typography>
							<Typography variant="h6" className={classes.navLinks}>
								<Link color="white">CLOTHING</Link>
							</Typography>
							<Typography variant="h6" className={classes.navLinks}>
								<Link color="white">OUTDOOR EQUIPMENT</Link>
							</Typography>
							<Typography variant="h6" className={classes.navLinks}>
								<Link color="white">TRAVEL</Link>
							</Typography>
							<Typography variant="h6" className={classes.navLinks}>
								<Link color="white">SALE</Link>
							</Typography>
						</Toolbar>
					</AppBar>
				</Box>
			</div>
			<div className={classes.root}>
				<Box width="100%">
					<Breadcrumbs
						separator={<NavigateNextIcon fontSize="small" />}
						aria-label="breadcrumb"
					>
						<Link color="inherit">SHOP</Link>
						<Link color="inherit">SHOES</Link>
						<Typography color="textPrimary">BEAN BOOTS</Typography>
					</Breadcrumbs>
				</Box>
			</div>
			<Box className="main-body" display="flex" flexDirection="row">
				<Box style={{ width: drawerWidth }}>
					<div className={classes.root}>
						<List>
							{["SHOES", "CLOTHES", "OUTDOOR", "TRAVEL", "SALE"].map((text) => (
								<ListItem button key={text}>
									<ListItemText primary={text} />
								</ListItem>
							))}
						</List>
					</div>
				</Box>
				<div>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="flex-start"
						alignSelf="flex-start"
						className={classes.root}
						spacing={0}
					>
						<Box className="filter-merchandise-list-by-price">
							<FormControl className={classes.formControl}>
								<InputLabel>Sort</InputLabel>
								<Select value={sortBy} onChange={handleSortByChange}>
									<MenuItem value="Price: High to Low">
										Price: High to Low
									</MenuItem>
									<MenuItem value="Price: Low to High">
										Price: Low to High
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box className="filter-number-of-items-on-page">
							<FormControl className={classes.formControl}>
								<InputLabel>Items per page</InputLabel>
								<Select
									value={itemsPerPage}
									onChange={handleNumberOfItemsChange}
								>
									<MenuItem value="All">All</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={48}>48</MenuItem>
									<MenuItem value={72}>72</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Box>
					<Box className="merchandise-list">
						<div>
							<Grid container className={classes.root} spacing={0}>
								<Grid item xs={12}>
									<Grid container justify="left" spacing={1}>
										{storeMerchandise.map((merch) => (
											<Grid
												key={merch.title}
												className={classes.galleryItem}
												item
											>
												<Link to={merch.linkTo}>
													<img
														className={classes.galleryImage}
														id={merch.title}
														src={merch.img}
														alt={merch.title}
													/>
												</Link>
											</Grid>
										))}
									</Grid>
								</Grid>
							</Grid>
						</div>
					</Box>
				</div>
			</Box>

			<Footer />
		</>
	);
}
