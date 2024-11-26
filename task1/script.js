// Створення об'єкта person
let person = {
  firstName: "Іван",
  lastName: "Шевченко",
  age: 25,
};

// Додавання властивості email
person.email = "ivan.shevchenko@example.com";

// Видалення властивості age
delete person.age;

// Виведення оновленого об'єкта person в консоль
console.log(person);
