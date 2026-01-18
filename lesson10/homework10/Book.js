export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Назва книги повинна бути непорожнім рядком");
        }
        this._title = value;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Автор повинен бути непорожнім рядком");
        }
        this._author = value;
    }

    set year(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error("Рік видання повинен бути додатнім числом");
        }
        this._year = value;
    }

    printInfo() {
        console.log(
            `Книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`
        );
    }

    static getOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error("Потрібен непорожній масив книг");
        }

        return books.reduce((oldest, current) =>
            current.year < oldest.year ? current : oldest
        );
    }
}
