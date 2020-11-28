import React from "react";

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
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src={imgUrl}
					className="card-img-top"
					height={imgHeight}
					width={imgWidth}
					alt={title}
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{contributor}</p>
					<p className="card-text">{description}</p>
					<a href={amazonUrl} className="btn btn-primary">
						Buy the Book
					</a>
				</div>
			</div>
		</div>
	);
};

export default Book;
