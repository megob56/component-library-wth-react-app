import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import profPic from "../components/assets/profile.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	profileImage: {
		height: "350px",
		width: "300px",
	},
	container: {
		maxWidth: "80%",
		margin: "auto",
		padding: "30px",
	},
}));

export default function LearnMore() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div
				className="js-nav-bar-div"
				style={{ marginBottom: "1rem", padding: "15px" }}
			>
				<NavBar />
			</div>
			<Box>
				<Box display="flex" justifyContent="flex-start" p={1}>
					<Box p={1} borderBottom={1} width="100%">
						<Typography variant="h4">Meet Meaghan</Typography>
					</Box>
				</Box>
				<Box
					p={1}
					display="flex"
					flexDirection="row"
					flexWrap="wrap"
					justifyContent="flex-start"
				>
					<Box p={1}>
						<img className={classes.profileImage} src={profPic} alt="profile" />
					</Box>
					<Box p={1} maxWidth="650px">
						<Typography variant="body1">
							Meaghan O'Brien is a 24 year old web developer. A 2019 graduate
							from the University of Massachusetts Amherst, Meaghan completed a
							degree in chemical engineering. While at college, Meaghan worked
							full-time for one year at pharmaceutical company, AbbVie, in
							Worcester, MA as a controls/automation engineer, building a
							dashboard for managers and production workers to monitor
							manufacturing processes in real time and send alerts if an alarm
							is imminent so control can be regained. In addition, she worked on
							projects for the validation engineering team. The following summer
							Meaghan was invited back to intern in the maintenance engineering
							department. Meaghan also completed a Research Experience for
							Undergraduates summer placement funded by the National Science
							Foundation where she researched the use of nanoparticles as a
							targeted chemotherapy delivery mechanism.
							<br />
							<br />
							After graduation, Meaghan re-located to the UK. She initially
							started out as a cybersecurity consultant at EY in London. Now she
							works as a full-stack developer for Audionetwork, a music
							licensing company, based in London.
							<br />
							<br />
							Meaghan has always had an interest in technology. She loves
							building things and seeing ideas come to life. Check out Meaghan's
							projects by following her on GitHub.
						</Typography>
					</Box>
				</Box>
			</Box>
			<Footer />
		</div>
	);
}
