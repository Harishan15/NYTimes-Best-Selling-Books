import axios from "axios";

const apiEndPoint =
	"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

const apiEndPointAll =
	"https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

export function getBookListData() {
	return axios.get(apiEndPoint);
}

export function getBookListNames() {
	return axios.get(apiEndPointAll);
}
