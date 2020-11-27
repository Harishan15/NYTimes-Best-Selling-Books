import React from "react";

const BookImage = ({ imgUrl, imgHeight, imgWidth, title }) => {
	return <img src={imgUrl} height={imgHeight} width={imgWidth} alt={title} />;
};

export default BookImage;
