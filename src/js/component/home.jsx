import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor] = useState ("yellow")
	return (
		<div className="traffic-light">
			<div className={"light red" + (selectedColor === "red" ? " red glow" : "" )}></div>
			<div className={"light yellow" + (selectedColor === "yellow" ? " yellow glow" : "")}></div>
			<div className={"light green" + (selectedColor === "green" ? "green glow" : "")}></div>
		</div>
	);
};

export default Home;
