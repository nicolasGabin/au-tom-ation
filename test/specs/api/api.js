const axios = require('axios');
const assert = require('assert');
const { expect } = require('chai');

describe('Users API Test', () => {
	it('should return a 200 response on GET', async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		expect(response.status).to.equal(200);
	});
});
