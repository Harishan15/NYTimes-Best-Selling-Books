import React, { Component } from "react";
import Params from "query-params";
import "./BookDetails.css";

class BookDetails extends Component {
	render() {
		// const ID = this.props.match.params.id;
		// const BookData = this.props.location.state.bookData;
		// console.log(this.props.location.state);
		const BookData = Params.decode(this.props.match.params.id);
		console.log(BookData);

		return (
			<div>
				<h1>Book details - {}</h1>
				<div className="row">
					<div className="col-4">
						<img src={BookData.book_image} alt="alt-name" />
					</div>
					<div className="col-8">
						<h2>Title : {BookData.title}</h2>
						<p>Author : {BookData.author}</p>
						<p>Publisher : {BookData.publisher}</p>
						<p>Description : {BookData.description}</p>
						<p>isbn10 : {BookData.primary_isbn10}</p>
						<p>isbn13 : {BookData.primary_isbn13}</p>
						<a
							href={BookData.amazon_product_url}
							className="btn btn-sm btn-primary"
						>
							Buy
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default BookDetails;
