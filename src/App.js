import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container-fluid mt-2">
				<h1
					style={{
						fontFamily: "Playfair Display",
						fontSize: "2rem",
						marginLeft: "10px",
					}}
				>
					New York Times Best Selling Books
				</h1>
				<BookList />
			</div>
		</React.Fragment>
	);
}

export default App;
