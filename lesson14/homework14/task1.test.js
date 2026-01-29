const axios = require('axios');

test('Get all posalbus', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
	const posts = response.data;

	expect(posts).toHaveLength(100);
	expect(posts.length).toBe(100);
	expect(response.status).toBe(200);
});

test('Get album with id 1 and verify the data', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1');
	const posts = response.data;
	expect(response.status).toBe(200);

	expect(response.data).toEqual({
		userId: 1,
		id: 1,
		title: 'quidem molestiae enim',
	});
});

test('Post new album and verify that it could be created', async () => {
	const requestBody = {
		userId: 1,
		title: 'Test album',
	};

	const response = await axios.post('https://jsonplaceholder.typicode.com/albums', requestBody);

	expect(response.status).toBe(201);
	expect(response.data).toMatchObject(requestBody);
	expect(response.data).toHaveProperty('id');
});

test('Get all photos', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
	const posts = response.data;

	expect(posts).toHaveLength(5000);
	expect(posts.length).toBe(5000);
	expect(response.status).toBe(200);
});

test('Get photo with id 1 and verify the data', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/photos/1');
	const posts = response.data;
	expect(response.status).toBe(200);

	expect(response.data).toEqual({
		albumId: 1,
		id: 1,
		title: 'accusamus beatae ad facilis cum similique qui sunt',
		url: 'https://via.placeholder.com/600/92c952',
		thumbnailUrl: 'https://via.placeholder.com/150/92c952',
	});
});
