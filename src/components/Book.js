import React, { Component } from "react";
// import Http from "../services/httpService";

class Book extends Component {
	state = {};
	render() {
		return (
			<div>
				<h2>Book Title</h2>
				{/* <Http /> */}
			</div>
		);
	}
}

export default Book;

const axios = require("axios");

const apiEndPoint =
	"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

// Make a request for a user with a given ID
axios
	.get(apiEndPoint)
	.then(function (response) {
		// handle success
		console.log(response);
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.then(function () {
		// always executed
	});
