import BookList from "./components/BookList";
import "./App.css";

function App() {
	return (
		<div className="container">
			<h1>NYTimes Best Selling Books</h1>

			<BookList />
		</div>
	);
}

export default App;
