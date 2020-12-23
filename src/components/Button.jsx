import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

function MyButton() {
	const MyButton = styled(Button)({
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: "0.3rem",
		color: "white",
		marginTop: "1.2rem",
		fontWeight: 600,
	});

	const history = useHistory();

	const routeChange = () => {
		let path = `/learn-more`;
		history.push(path);
	};

	return <MyButton onClick={routeChange}>Learn More</MyButton>;
}

export default MyButton;
