import {VolumeController} from "../controllers/volumes";

exports.getByIdHandler = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getOneVolume only accept GET method, you tried: ${event.httpMethod}`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    let response;

    try{
        const item = await VolumeController.findById(event.pathParameters);

        response = {
            statusCode: 200,
            body: JSON.stringify(item)
        };
    }catch(ex){
        response = {
            statusCode: 400,
            body: JSON.stringify(ex)
        }
    }

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
}
