import React, { Component } from "react";
import Book from "./Book";
import { getBookListData } from "../services/httpService";

class BookList extends Component {
	state = {
		books: [],
		bookTitle: [],
	};

	async componentDidMount() {
		const { data } = await getBookListData();
		const books = data.results.books;
		const bookTitle = data.results.books[0].title;
		this.setState({ books, bookTitle });
		console.log("Result : ", data);
	}

	render() {
		return (
			<div>
				<h1>NYTimes Best Selling Books</h1>

				{this.state.books.map((book) => {
					console.log(book.title);
					return <Book title={book.title} />;
				})}
			</div>
		);
	}
}

export default BookList;
