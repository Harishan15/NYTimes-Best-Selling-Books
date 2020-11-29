import axios from "axios";

const fHard =
	"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

const ftrade =
	"https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

const fComb =
	"https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

// above fiction
const nHard =
	"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

const ntrade =
	"https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";
const nComb =
	"https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=QSyF0KLFUDX9WoTPTCDrfl7BLrDvU48Y";

export function getfHard() {
	return axios.get(fHard);
}
export function getftrade() {
	return axios.get(ftrade);
}
export function getfComb() {
	return axios.get(fComb);
}

export function getnHard() {
	return axios.get(nHard);
}
export function getntrade() {
	return axios.get(ntrade);
}
export function getnComb() {
	return axios.get(nComb);
}
