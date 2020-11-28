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
		<div className="col-3 d-flex justify-content-center mt-3">
			{/* <div className="col d-flex justify-content-center mt-3"> */}
			<div className="card mb-3 p-0" style={{ maxWidth: 540 }}>
				<div className="row no-gutters">
					<div className="col-md-4 p-1">
						<img src={imgUrl} className="card-img" alt={title} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{title}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{contributor}</h6>

							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>

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
