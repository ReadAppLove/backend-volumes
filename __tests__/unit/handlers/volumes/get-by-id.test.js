// Import all functions from get-by-id.js
const lambda = require('../../../../dist/handlers/volumes/get-by-id.js');

// This includes all tests for getByIdHandler()
describe('Test getByIdHandler', () => {
    it('Should return the volume "Harry Potter e la Pietra Filosofale"', async () => {

        const item = {
            id: '9CJWTbd-RYoC'
        }

        const event = {
            httpMethod: 'GET',
            pathParameters: {
                id: '9CJWTbd-RYoC'
            }
        }

        // Invoke the handler
        const result = await lambda.getByIdHandler(event);
        const responseBody = JSON.parse(result.body);

        // Compare the result with the expected result
        expect(result.statusCode).toEqual(200);
        expect(responseBody.id).toEqual(item.id);
    });
});
