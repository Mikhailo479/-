import Book from "./Book.js";

// Створення класу EBook, який успадковує Book
class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year); // Виклик конструктора батьківського класу
    this.fileFormat = fileFormat; // Додаткова властивість
  }

  // Перевизначення методу printInfo
  printInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`
    );
  }
}

// Експорт класу EBook
export default EBook;
