import React, { Component } from "react";
import Book from "./Book";
import Heading from "./Heading";
import { getBookListData } from "../services/httpService";

import "./Book.css";

class BookList extends Component {
	state = {
		books: [],
	};

	async componentDidMount() {
		const { data } = await getBookListData();
		const books = data.results.books;
		this.setState({ books });
		console.log("Result Books : ", books);
		console.log("Result State : ", this.state.books);
	}

	render() {
		return (
			<React.Fragment>
				<Heading />
				<div className="d-flex flex-wrap card-pos">
					{this.state.books.map((book, index) => {
						console.log(book.title);
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
