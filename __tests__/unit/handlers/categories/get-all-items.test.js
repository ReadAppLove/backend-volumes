// Import all functions from get-all.js
const lambda = require('../../../../dist/handlers/categories/get-all.js');
// Import dynamodb from aws-sdk 

// This includes all tests for getAllItemsHandler() 
describe('Test getAllHandler', () => {
    it('Should return a list of volume categories', async () => {
        const items = ['9CJWTbd-RYoC','OyTengEACAAJ' ];

        const event = {
            httpMethod: 'GET',
            queryStringParameters: {
                locale: 'it-IT'
            }
        }
 
        // Invoke helloFromLambdaHandler() 
        const result = await lambda.getAllHandler(event);
        // const responseBody = JSON.parse(result.body);

        // Compare the result with the expected result
        expect(result.statusCode).toEqual(200);
    });
}); 
