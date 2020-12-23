import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import MyButton from "../components/Button";
import profPic from "../components/assets/profile.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	items: {
		padding: theme.spacing(2),
	},
	profileImage: {
		verticalAlign: "middle",
		width: "183px",
		height: "183px",
		borderRadius: "50%",
	},
}));

function Profile() {
	const classes = useStyles();

	return (
		<div style={{ width: "100%" }}>
			<Box
				display="flex"
				flexDirection="row"
				flexWrap="wrap"
				justifyContent="center"
			>
				<Box>
					<Avatar
						className={classes.profileImage}
						alt="profile"
						src={profPic}
					/>
				</Box>
				<Box>
					<Box
						display="flex"
						flexDirection="row"
						flexWrap="wrap"
						justifyContent="flex-start"
					>
						<Box>
							<Typography variant="h4" className={classes.items}>
								Meaghan
							</Typography>
						</Box>
						<Box>
							<MyButton />
						</Box>
					</Box>
					<Box display="flex" flexDirection="row" justifyContent="flex-start">
						<Box>
							<Typography variant="subtitle1" className={classes.items}>
								<strong>
									{Math.floor(
										(new Date().getTime() - new Date("May 1, 1996").getTime()) /
											(1000 * 60 * 60 * 24)
									) -
										Math.floor(
											(new Date().getTime() -
												new Date("March 13, 2019").getTime()) /
												(1000 * 60 * 60 * 24)
										)}
								</strong>{" "}
								days in the US
							</Typography>
						</Box>
						<Box>
							<Typography variant="subtitle1" className={classes.items}>
								<strong>
									{Math.floor(
										(new Date().getTime() -
											new Date("March 13, 2019").getTime()) /
											(1000 * 60 * 60 * 24)
									)}
								</strong>{" "}
								days in the UK
							</Typography>
						</Box>
					</Box>
					<Box display="flex" justifyContent="flex-start">
						<Typography variant="body1" className={classes.items}>
							<strong>Meaghan Elizabeth O'Brien</strong> <br /> Web Developer.
							American living in the UK
						</Typography>
					</Box>
				</Box>
			</Box>
		</div>
	);
}
export default Profile;
