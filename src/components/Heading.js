import React from "react";

const Heading = (props) => {
	return (
		<h1
			style={{
				fontFamily: "Playfair Display",
				fontSize: "2rem",
				marginLeft: "10px",
				marginBottom: "20px",
			}}
		>
			{props.children}
		</h1>
	);
};

export default Heading;
