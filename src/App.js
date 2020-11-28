import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<main className="container-fluid mt-2">
				<Switch>
					<Route path="/books" exact component={BookList} />
					<Route path="/books/:id" component={BookDetails} />
					<Route path="/not-found" render={() => <h1>Not Found</h1>} />
					<Redirect from="/" exact to="/books" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
