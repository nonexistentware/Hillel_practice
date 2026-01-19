import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("1984", "Джордж Орвелл", 1949);

const ebook1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

ebook1.fileFormat = "EPUB";
console.log("Новий формат:", ebook1.fileFormat);

const allBooks = [book1, book2, ebook1];
const oldestBook = Book.getOldestBook(allBooks);

console.log("\nНайдавніша книга:");
oldestBook.printInfo();

const ebookFromBook = EBook.fromBook(book2, "MOBI");
ebookFromBook.printInfo();
