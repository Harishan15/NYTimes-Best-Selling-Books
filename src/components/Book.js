import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

const Book = ({
	imgUrl,
	imgHeight,
	imgWidth,
	title,
	amazonUrl,
	contributor,
	description,
	isbn,
}) => {
	return (
		<div className="card-new">
			<div className="card-new-imgbody">
				<img src={imgUrl} className="card-new-img" alt={title} />
			</div>
			<div className="card-new-body">
				<div>
					<h5 className="card-title">{title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{contributor}</h6>
				</div>
				{/* <a href="/" className="btn btn-sm btn-primary">
					more details
				</a> */}
				<Link to={`/books/${isbn}`} className="btn btn-sm btn-primary">
					More details
				</Link>
			</div>
		</div>
	);
};

export default Book;
