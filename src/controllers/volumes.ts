import {VolumeService} from '../services/volumes';

export class VolumeController {

    static findById = async (params) => {

        const id : string = params.id?.trim();
        const projection : string = params.projection?.trim() ?? 'lite';
        const volumeService : VolumeService = new VolumeService();

        if(!id){
            throw new Error("You must specify the volume's ID");
        }

        return volumeService.findById(id, projection)
    }
}