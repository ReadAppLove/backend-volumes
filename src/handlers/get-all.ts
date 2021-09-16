import {VolumeController} from "../controllers/volumes";

exports.getAllHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getAll only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event.queryStringParameters);

    let response;

    try{
        const items = await VolumeController.list(event.queryStringParameters);

        response = {
            statusCode: 200,
            body: JSON.stringify(items)
        };
    }catch(ex){
        response = {
            statusCode: 400,
            body: ex.message
        }
    }

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
