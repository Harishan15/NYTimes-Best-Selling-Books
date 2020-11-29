import React, { Component } from "react";
import Params from "query-params";
import Heading from "./Heading";
import "./BookDetails.css";

class BookDetails extends Component {
	render() {
		const BookData = Params.decode(this.props.match.params.id);

		return (
			<React.Fragment>
				<Heading>Books details</Heading>
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
			</React.Fragment>
		);
	}
}

export default BookDetails;
