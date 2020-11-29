import React, { Component } from "react";
import Book from "./Book";
import Heading from "./Heading";
import { getBookListData } from "../services/httpService";
// import { Link } from "react-router-dom";

import "./Book.css";
import "./BookDetails.css";

class BookList extends Component {
	state = {
		books: [],
	};

	async componentDidMount() {
		const { data } = await getBookListData();
		const books = data.results.books;
		this.setState({ books });
		console.log(data);
	}

	render() {
		return (
			<React.Fragment>
				<Heading>New York Times Best Sellers</Heading>
				<h2 className="book-sub-head">
					Top 15 Best Selling books - Hardcover Non Fiction
				</h2>

				<div className="d-flex flex-wrap card-pos">
					{this.state.books.map((book, index) => {
						return (
							<Book key={book.primary_isbn13} id={index} bookData={book} />
						);
					})}
				</div>
			</React.Fragment>
		);
	}
}

export default BookList;
