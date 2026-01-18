import { Book } from "./Book.js";

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Формат файлу повинен бути непорожнім рядком");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(
            `Електронна книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`
        );
    }

    static fromBook(book, fileFormat) {
        if (!(book instanceof Book)) {
            throw new Error("Потрібен екземпляр класу Book");
        }

        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}
