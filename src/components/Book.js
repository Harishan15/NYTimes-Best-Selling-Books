import React, { Component } from "react";
import { getBookListData } from "./../services/httpService";

class Book extends Component {
	state = {};

	async componentDidMount() {
		const { data: result } = await getBookListData();
		console.log(result.results.books[1].title);
	}

	render() {
		return (
			<div>
				<h2>Book Title</h2>
			</div>
		);
	}
}

export default Book;
