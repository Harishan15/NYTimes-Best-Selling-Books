import axios from "axios";

const apiEndPoint =
	"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

export function getBookListData() {
	return axios.get(apiEndPoint);
}
