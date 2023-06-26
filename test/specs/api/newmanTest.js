const newman = require('newman');
const assert = require('assert');
const { expect } = require('chai');

describe('API Tests', () => {
	it('should run the tests defined in the collection', (done) => {
		newman.run({
			collection: require('./collection.json'),
			reporters: 'cli'
		}, (err, summary) => {
			if (error) {
				done(error);
			} else {
				if (summary.run.failures.length > 0) {
					done(new Error('API tests failed'));
				} else {
					done();
				}
			}
		});
	});
});
