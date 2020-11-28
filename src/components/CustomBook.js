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
		<div className="card custom-card">
			<img src={imgUrl} className="card-img-top custom-card-img" alt={title} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{contributor}</h6>
				<a href="/" className="btn btn-sm btn-primary">
					more details
				</a>
			</div>

			{/* <div className="row no-gutters">
				<div className="col-4 d-flex align-items-center">
					<img src={imgUrl} className="card-img d-none" alt={title} />
				</div>
				<div className="col-8 ">
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{contributor}</h6>

						<p className="card-text" style={{ fontSize: "14px" }}>
						 {description} 
						</p>
						<a href={amazonUrl} className="btn btn-sm btn-primary">
								Buy on Amazon
							</a> 
					</div>
				</div>
			</div> */}

			{/* <div
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
					<p className="card-text">{contributor}</p>
					<h6 className="card-subtitle mb-2 text-muted">{contributor}</h6>

					<p className="card-text" style={{ fontSize: "14px" }}>
						{description}
					</p>
					<a href={amazonUrl} className="btn btn-primary">
						Buy on Amazon
					</a>
				</div>
			</div> */}
		</div>
	);
};

export default Book;
