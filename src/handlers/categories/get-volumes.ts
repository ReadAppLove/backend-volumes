import {VolumeCategoryController} from "../../controllers/categories";

exports.handler = async (event) => {
    // All log statements are written to CloudWatch
    console.info('received:', event.pathParameters);

    let response;

    try{
        const item = await VolumeCategoryController.getVolumes(event.pathParameters);

        response = {
            statusCode: item.status,
            body: JSON.stringify(item.data)
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
