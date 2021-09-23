// Import all functions from get-all.js
const lambda = require('../../../../dist/handlers/categories/get-volumes.js');
// Import dynamodb from aws-sdk 

// This includes all tests for getAllItemsHandler() 
describe('Test getAllHandler', () => {
    it('Should return a list of volumes', async () => {
        const items = ['9CJWTbd-RYoC','OyTengEACAAJ' ];

        const event = {
            httpMethod: 'GET',
            pathParameters: {
                id: 'coll_1221'
            }
        }
 
        // Invoke helloFromLambdaHandler() 
        const result = await lambda.handler(event);
        // const responseBody = JSON.parse(result.body);

        // Compare the result with the expected result
        expect(result.statusCode).toEqual(200);
    });
}); 
