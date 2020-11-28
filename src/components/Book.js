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
		<div className="col d-flex justify-content-center">
			<div
				className="card book-card mb-3"
				style={{
					width: "230px",
				}}
			>
				<img
					src={imgUrl}
					className="card-img-top"
					// height={imgHeight}
					// width={imgWidth}
					alt={title}
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					{/* <p className="card-text">{contributor}</p> */}
					<h6 className="card-subtitle mb-2 text-muted">{contributor}</h6>

					<p className="card-text" style={{ fontSize: "14px" }}>
						{description}
					</p>
					<a href={amazonUrl} className="btn btn-primary">
						Buy the Book
					</a>
				</div>
			</div>
		</div>
	);
};

export default Book;
