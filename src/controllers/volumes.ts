import {VolumeService} from '../services/volumes';

export class VolumeController {

    static list = async (params) => {
        if(!params || !params.q){
            throw new Error('You must specify the search query using the "q" parameter');
        }

        const q : string = params.q.trim();
        const projection : string = params.projection?.trim() ?? 'lite';
        const maxResults : number = parseInt(params.maxResults ?? 10);
        const startIndex : number = parseInt(params.startIndex ?? 0);

        const volumeService : VolumeService = new VolumeService();

        return volumeService.list(q, projection, maxResults, startIndex);
    }

    static findById = async (params) => {

        const id : string = params.id?.trim();
        const projection : string = params.projection?.trim() ?? 'lite';
        const volumeService : VolumeService = new VolumeService();

        if(!id){
            throw new Error('You must specify the volume\'s ID');
        }

        return volumeService.findById(id, projection)
    }
}