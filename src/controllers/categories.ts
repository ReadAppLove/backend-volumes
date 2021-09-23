import {VolumeCategoryService} from '../services/categories';

export class VolumeCategoryController {

    static list = async (params) => {
        const locale : string = params.locale?.trim() ?? 'it_IT';
        const volumeCategoryService : VolumeCategoryService = new VolumeCategoryService();

        return volumeCategoryService.list(locale);
    }

    static getVolumes = async (params) => {

        if(!params || !params?.id){
            throw new Error('You have to specify the "id" parameter');
        }

        const id = params.id?.trim();
        const volumeCategoryService : VolumeCategoryService = new VolumeCategoryService();

        return  volumeCategoryService.getVolumes(id);
    }
}