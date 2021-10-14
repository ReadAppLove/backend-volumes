import {VolumeController} from "../../controllers/volumes";

exports.getAllHandler = async (event) => {
    // All log statements are written to CloudWatch
    console.info('received:', event.queryStringParameters);

    let response;

    try{
        const items = await VolumeController.list(event.queryStringParameters);

        response = {
            statusCode: items.status,
            body: JSON.stringify(items.data)
        };
    }catch(ex){
        response = {
            statusCode: 400,
            body: ex.message
        }
    }

    // All log statements are written to CloudWatch
    // console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    console.info(`response from: ${event.path} statusCode: ${response.statusCode}`);
    return response;
}
