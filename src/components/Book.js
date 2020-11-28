import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

const Book = ({ bookData, id }) => {
	return (
		<div className="card-new">
			<div className="card-new-imgbody">
				<img
					src={bookData.book_image}
					className="card-new-img"
					alt={bookData.title}
				/>
			</div>
			<div className="card-new-body">
				<div>
					<h5 className="card-title">{bookData.title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">
						{bookData.contributor}
					</h6>
				</div>
				{/* <a href="/" className="btn btn-sm btn-primary">
					more details
				</a> */}
				<Link to={`/books/${id}`} className="btn btn-sm btn-primary">
					More details
				</Link>
				{console.log("bookData", bookData.title)}
			</div>
		</div>
	);
};

export const bookData = ({ bookData }) => {
	return bookData;
};

export default Book;
