import {google,books_v1} from 'googleapis';

class VolumeCategoryService {

    private _books: books_v1.Books;

    constructor() {

        const auth = new google.auth.GoogleAuth({
            keyFile: 'service_account.json',
            scopes: [
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/books'
            ],
        });

        this._books = google.books({
            version: 'v1',
            auth,
        });
    }

    list = async (locale) => {

        return await this._books.onboarding.listCategories({
            locale,
        });
    }

    getVolumes = async (id) => {
        return await this._books.onboarding.listCategoryVolumes({
            categoryId:id
        });
    }
}

export {VolumeCategoryService}