import React from "react";
import { Button, ButtonGroup, Box } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& > *": {
			margin: "1.2rem",
		},
	},
}));

export default function SocialMediaButtonGroup() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="flex-start"
				p={1}
				m={1}
			>
				<Button
					style={{
						background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
						color: "white",
					}}
				>
					<GitHubIcon />
				</Button>
				<Button
					style={{
						background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
						color: "white",
					}}
				>
					<LinkedInIcon />
				</Button>
				<Button
					style={{
						background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
						color: "white",
					}}
				>
					<FacebookIcon />
				</Button>
			</Box>
		</div>
	);
}
