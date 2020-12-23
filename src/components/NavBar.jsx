import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	homeButton: {
		marginRight: theme.spacing(2),
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

export default function NavBar() {
	const mobileMenuId = "primary-search-account-menu-mobile";

	const classes = useStyles();
	const history = useHistory();
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const routeChange = () => {
		let path = `/`;
		history.push(path);
	};

	return (
		<div className={classes.root}>
			<AppBar
				position="fixed"
				style={{
					background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
				}}
			>
				<Toolbar variant="dense">
					<IconButton
						edge="start"
						className={classes.homeButton}
						color="white"
						aria-label="menu"
					>
						<HomeRoundedIcon
							style={{ color: "white" }}
							size="large"
							onClick={routeChange}
						/>
					</IconButton>
					<Typography variant="h6">Home</Typography>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton
							href="https://github.com/megob56"
							target="_blank"
							color="white"
							aria-label="menu"
						>
							<GitHubIcon style={{ color: "white" }} />
						</IconButton>
						<IconButton
							href="https://www.linkedin.com/in/megobrien2/"
							target="_blank"
							color="white"
							aria-label="menu"
						>
							<LinkedInIcon style={{ color: "white" }} />
						</IconButton>
						<IconButton edge="end" color="white" aria-label="menu">
							<FacebookIcon style={{ color: "white" }} />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							color="white"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
						>
							<MoreIcon style={{ color: "white" }} />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
