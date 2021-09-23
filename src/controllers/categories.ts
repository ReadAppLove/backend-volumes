import {VolumeCategoryService} from '../services/categories';

export class VolumeCategoryController {

    static list = async (params) => {
        const locale : string = params.locale?.trim() ?? 'it-IT';

        const volumeService : VolumeCategoryService = new VolumeCategoryService();

        return volumeService.list(locale);
    }
}