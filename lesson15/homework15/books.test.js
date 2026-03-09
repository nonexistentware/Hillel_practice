const booksController = require('../homework15/controller/booksController.js');

describe('BookStore API tests', () => {
	let isbn;

	test('Get all books', async () => {
		const response = await booksController.getAllBooks();

		expect(response.status).toBe(200);

		expect(response.data).toHaveProperty('books');

		expect(response.data.books.length).toBeGreaterThan(0);

		isbn = response.data.books[0].isbn;
	});

	test('Each book should contain required fields', async () => {
		const response = await booksController.getAllBooks();

		const book = response.data.books[0];

		expect(book).toHaveProperty('isbn');
		expect(book).toHaveProperty('title');
		expect(book).toHaveProperty('author');
		expect(book).toHaveProperty('publisher');
	});

	test('ISBN should not be empty', async () => {
		const response = await booksController.getAllBooks();

		response.data.books.forEach((book) => {
			expect(book.isbn).toBeTruthy();
		});
	});

	test('Get book by ISBN', async () => {
		const allBooks = await booksController.getAllBooks();

		const isbn = allBooks.data.books[0].isbn;

		const response = await booksController.getBookByISBN(isbn);

		expect(response.status).toBe(200);

		expect(response.data.isbn).toBe(isbn);
	});

	test('Book title should be string', async () => {
		const response = await booksController.getAllBooks();

		const book = response.data.books[0];

		expect(typeof book.title).toBe('string');
	});

	test('Book list response time should be less than 2 seconds', async () => {
		const start = Date.now();

		await booksController.getAllBooks();

		const end = Date.now();

		expect(end - start).toBeLessThan(2000);
	});
});
