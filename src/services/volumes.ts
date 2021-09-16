import {google,books_v1} from 'googleapis';

class VolumeService{

    private books : books_v1.Books;

    constructor() {
        this.books = google.books({
            version: 'v1',
            auth: process.env.GOOGLE_API_KEY,
        });
    }

    findById = async (id:string, projection:string = 'lite') => {
        return await this.books.volumes.get({
            volumeId: id,
            projection
        });
    }

    /*
    list = (q, maxResults = 10, orderBy = 'newest', projection = 'lite', startIndex = 0) => {

    }
     */
}

export {VolumeService};