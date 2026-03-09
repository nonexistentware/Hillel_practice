const axios = require('axios');

const BASE_URL = 'https://bookstore.toolsqa.com';

class BooksController {
	async getAllBooks() {
		return axios.get(`${BASE_URL}/BookStore/v1/Books`);
	}

	async getBookByISBN(isbn) {
		return axios.get(`${BASE_URL}/BookStore/v1/Book`, {
			params: { ISBN: isbn },
		});
	}
}

module.exports = new BooksController();
