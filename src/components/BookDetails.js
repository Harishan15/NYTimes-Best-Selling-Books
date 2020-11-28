import React, { Component } from "react";
import "./BookDetails.css";

class BookDetails extends Component {
	render() {
		const ID = this.props.match.params.id;

		return (
			<div>
				<h1>Book details - {this.props.match.params.id}</h1>
				<div className="row">
					<div className="col-4">
						<img src="/" alt="alt-name" />
					</div>
					<div className="col-8">
						<h2>Title : {ID}</h2>
						<p>Author : </p>
						<p>Publisher :</p>
						<p>Description :</p>
						<p>isbn10 :</p>
						<p>isbn13 :</p>
						<button className="btn btn-sm btn-primary">Buy</button>
					</div>
				</div>
			</div>
		);
	}
}

export default BookDetails;
