import {VolumeCategoryService} from '../services/categories';

export class VolumeCategoryController {

    static list = async (params) => {
        const locale : string = params.locale?.trim() ?? 'it_IT';
        const volumeCategoryService : VolumeCategoryService = new VolumeCategoryService();

        return volumeCategoryService.list(locale);
    }

    static getVolumes = async (pathParameters,queryStringParameters) => {

        if(!pathParameters || !pathParameters?.id){
            throw new Error('You have to specify the "id" parameter');
        }

        const id = pathParameters.id?.trim();
        const locale = queryStringParameters?.locale?.trim() ?? 'it_IT';
        const volumeCategoryService : VolumeCategoryService = new VolumeCategoryService();

        return  volumeCategoryService.getVolumes(id,locale);
    }
}