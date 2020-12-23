import React from "react";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import TileData from "../components/TileData";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<div className="js-nav-bar-div" style={{ marginBottom: "5rem" }}>
				<NavBar />
			</div>
			<Profile />
			<TileData />
			<Footer />
		</>
	);
}

export default Home;
