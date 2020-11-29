import React, { Component } from "react";
import Params from "query-params";
import "./BookDetails.css";

class BookDetails extends Component {
	render() {
		const BookData = Params.decode(this.props.match.params.id);
		return (
			<React.Fragment>
				<h1 className="book-head">The New York Times Best Sellers</h1>
				<h2 className="book-sub-head">Book details - Hardcover Non Fiction</h2>

				<div className="custom-container row flex-wrap">
					<div className="img-container col-md-4 col-sm-4">
						<img
							src={BookData.book_image}
							className="book-img"
							alt={BookData.title}
						/>
					</div>

					<div className="details-container col-md-8 col-sm-8">
						<p className="book-title">{BookData.title}</p>
						{/* <p className="book-author">{BookData.contributor}</p> */}

						<div className="row">
							<span className="custom-label col-6">Author</span>
							<span className="custom-label col-6">Publisher</span>
							<p className="col-6">{BookData.author}</p>
							<p className="col-6">{BookData.publisher}</p>
						</div>

						<span className="custom-label">Description</span>
						<p className="book-desc">{BookData.description}</p>

						<p className="custom-label">Publisher : {BookData.publisher}</p>

						<p className="custom-label mb-0">
							ISBN10 : {BookData.primary_isbn10}
						</p>
						<p className="custom-label"> ISBN13 : {BookData.primary_isbn13}</p>

						<a
							href={BookData.amazon_product_url}
							className="btn btn-sm btn-primary"
						>
							Buy on Amazon
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BookDetails;
