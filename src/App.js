import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<div className="container-fluid px-0">
			<Navbar />
			<div className="ml-3 p-1">
				<h1 style={{ fontFamily: "Playfair Display", fontSize: "2rem" }}>
					New York Times Best Sellers
				</h1>
			</div>
			<BookList />
		</div>
	);
}

export default App;
