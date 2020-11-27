import React, { Component } from "react";
import Book from "./Book";

class Booklist extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>NYTimes Best Selling Books</h1>
				<Book />
			</div>
		);
	}
}

export default Booklist;
