import {google,books_v1} from 'googleapis';

class VolumeService{

    private books : books_v1.Books;

    constructor() {

        const auth = new google.auth.GoogleAuth({
            keyFile: 'service_account.json',
            scopes: [
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/books'
            ],
        });

        this.books = google.books({
            version: 'v1',
            auth,
        });
    }

    list = async (q : string, projection : string = 'lite', maxResults : number = 10, startIndex : number = 0) => {
        return await this.books.volumes.list({
            q,
            projection,
            maxResults,
            startIndex,
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