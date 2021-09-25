import {google,books_v1} from 'googleapis';

class VolumeService{

    private books : books_v1.Books;

    constructor() {
        this.books = google.books({
            version: 'v1',
        });
    }

    list = async (q : string, projection : string = 'lite', maxResults : number = 10, startIndex : number = 0, langRestrict : string = 'it_IT') => {
        return await this.books.volumes.list({
            q,
            projection,
            maxResults,
            startIndex,
            langRestrict,
        });
    }

    findById = async (id:string, projection:string = 'lite') => {
        return await this.books.volumes.get({
            volumeId: id,
            projection
        });
    }
}

export {VolumeService};