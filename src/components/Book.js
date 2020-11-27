import React from "react";
import BookImage from "../utils/BookImage";

const Book = ({ imgUrl, imgHeight, imgWidth, title }) => {
	return (
		<div>
			<BookImage
				imgUrl={imgUrl}
				imgHeight={imgHeight}
				imgWidth={imgWidth}
				title={title}
			/>
			<h3>{title}</h3>
		</div>
	);
};

export default Book;
