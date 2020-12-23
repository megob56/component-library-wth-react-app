import React from "react";
import { Typography, Box, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
	return (
		<div style={{ position: "relative", left: 0, bottom: 0, width: "100%" }}>
			<hr />
			<Box display="flex" p={1} alignItems="flex-end">
				<Box p={1} width="100%">
					<Typography variant="subtitle1">
						Copyright @ 2020 BytesizedBlonde | All Rights Reserved
					</Typography>
				</Box>
				<Box p={1} flexShrink={1}>
					<IconButton
						href="https://github.com/megob56"
						target="_blank"
						color="black"
						aria-label="menu"
					>
						<GitHubIcon style={{ color: "black" }} />
					</IconButton>
				</Box>
				<Box p={1} flexShrink={0}>
					<IconButton
						href="https://www.linkedin.com/in/megobrien2/"
						target="_blank"
						color="black"
						aria-label="menu"
					>
						<LinkedInIcon style={{ color: "black" }} />
					</IconButton>
				</Box>
				<Box p={1} flexShrink={0}>
					<IconButton edge="end" color="black" aria-label="menu">
						<FacebookIcon style={{ color: "black" }} />
					</IconButton>
				</Box>
			</Box>
		</div>
	);
}
