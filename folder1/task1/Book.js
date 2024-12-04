// Створення класу Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // Метод для друку опису книги
  printInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`
    );
  }
}

// Експорт класу Book
export default Book;
