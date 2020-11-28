import React from "react";
import "./Book.css";

const Book = ({
	imgUrl,
	imgHeight,
	imgWidth,
	title,
	amazonUrl,
	contributor,
	description,
}) => {
	return (
		<div className="card-new">
			<div className="card-new-imgbody">
				<img src={imgUrl} className="card-new-img" alt={title} />
			</div>
			<div className="card-new-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{contributor}</h6>
				<a href="/" className="btn btn-sm btn-primary">
					more details
				</a>
			</div>
		</div>
	);
};

export default Book;
