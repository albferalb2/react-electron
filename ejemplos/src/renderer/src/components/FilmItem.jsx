import { v4 as uuidv4 } from 'uuid';

export class FilmItem {
constructor({ title, director, year, genre }) {
    this.id = uuidv4();
    this.title = title;
    this.director = director;
    this.year = year;
    this.genre = genre;
    this.isfavorite = false;
    this.language = 'es';
    this.originLanguage = 'es';
    this.image = image || '';
    this.rating = null;
    this.cast = [];
}
}