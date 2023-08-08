import React from "react";
import CountdownTimer from "./counter"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<CountdownTimer/>
		
		</div>
	);
};

export default Home;
