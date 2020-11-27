import React, { Component } from "react";
// import { getBookListData } from "./../services/httpService";

class Book extends Component {
	// async componentDidMount() {
	// 	const { data: result } = await getBookListData();
	// 	console.log(result.results.books[1].title);
	// }

	render() {
		return (
			<div>
				<h3>title : {this.props.title}</h3>
			</div>
		);
	}
}

export default Book;
