import React, { Component } from "react";
import Book from "./Book";
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
		console.log("Result : ", data);
	}

	render() {
		return (
			<div className="d-flex flex-wrap card-pos">
				{this.state.books.map((book) => {
					console.log(book.title);
					return (
						<Book
							key={book.primary_isbn13}
							title={book.title}
							isbn={book.primary_isbn13}
							imgUrl={book.book_image}
							imgHeight={book.book_image_height}
							imgWidth={book.book_image_width}
							amazonUrl={book.amazon_product_url}
							contributor={book.contributor}
							description={book.description}
						/>
					);
				})}
			</div>
		);
	}
}

export default BookList;
