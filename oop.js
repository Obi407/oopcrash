//const s1 = 'Hello';
//console.log(s.toLocaleUpperCase());
//console.log(typeof s1);

//const s2 = new String('Hello')
//console.log(typeof s2);

//console.log(window);
//alert(1)

//console.log(navigator.appVersion);

//Object Literal

//const book1 = {
//    title: 'Book One',
 //   author: 'Obinna Ugwu',
  //  year: '2013',
  //  getSummary: function() {
  //      return `${this.title} was written by ${this.author} in ${this.year}`
  //  }
//};

//const book2 = {
  //  title: 'Book Two',
    //author: 'Deni Moore',
    //year: '2016',
    //getSummary: function() {
      //  return `${this.title} was written by ${this.author} in ${this.year}`
    //}
//}

//console.log(book2.getSummary());
//console.log(Object.values(book2));
//console.log(Object.keys(book2));

//constructor
//function Book(title, author, year) {
  //  this.title = title;
    //this.author = author;
    //this.year = year;
    //this.getSummary = function(){
      //  return `${this.title} was written by ${this.author} in ${this.year}`
    //}
//}

//getSummary
//Book.prototype.getSummary = function() {
  //  return `${this.title} was written by ${this.author} in ${this.year}`;
//};

//getAge
//Book.prototype.getAge = function() {
  //  const years = new Date().getFullYear() - this.year;
    //return `${this.title} is ${years} years old`;
//};

//Revise / Change Year
//Book.prototype.revise = function(newYear) {
  //  this.year = newYear;
  //  this.revised = true;
//};

//instatiate an Object
//const book1 = new Book('Book one', 'Obinna Ugwu', '2023');
//const book2 = new Book('Book two', 'Edward Hole', '2022');

//console.log(book1);
//console.log(book2.getSummary());
//console.log(book1.getAge());
//book2.revise('2023');
//console.log(book2);



//constructor
//function Book(title, author, year) {
  //  this.title = title;
    //this.author = author;
    //this.year = year;
//};

//getSummary
//Book.prototype.getSummary = function() {
  //  return `${this.title} was written by ${this.author} in ${this.year}`;
//};

//Magazine Constructor

//function Magazine(title, author, year, month) {
  //  Book.call(this, title, author, year);

    //this.month = month;
//}

//inherit prototype

//Magazine.prototype = Object.create(Book.prototype)

//Instantiate Magazine Object

//const mag1 = new Magazine( 'Mag One', 'Obinna Ugwu', '2022', 'Jun');

//console.log(mag1.getSummary());



//Object of Protos
//const bookProtos = {
  //  getSummary: function() {
    //    return `${this.title} was written by ${this.author} in ${this.year}`;
    //},
    //getAge: function(){
      //  const years = new Date().getFullYear() - this.year;
        //return `${this.title} is ${years} years old`;
    //}
//}

//Create Object
//const book1 = Object.create(bookProtos);
//book1.title = 'Book One';
//book1.author = 'Obinna Ugwu';
//book1.year = '2022';

//const book1 = Object.create(bookProtos, {
  //  title: {value: 'Book One'},
    //author: { value: 'Obinna Ugwu'},
    //year: {value: '2020'}
//});

//console.log(book1);


//class book {
  //  constructor(title, author, year){
    //    this.title = title;
      //  this.author = author;
        //this.year = year;
    //}
    //getSummary() {
      //      return `${this.title} was written by ${this.author} in ${this.year}`;
        //}
    //getAge(){
      //  const years = new Date().getFullYear() - this.year;
        // return `${this.title} is ${years} years old`;
    //}
    //revise(newYear) {
      //  this.year = newYear;
        //this.revised = true;
    //}

    //static topBookStore(){
      //  return `Barnes & Noble`;
    //}
//}

//instantiate Object

//const book1 = new book('Book One', 'Obinna Ugwu', '2020')

//console.log(book1);
//book1.revise('2024');
//console.log(book1);

//console.log(book.topBookStore());


//class Book {
  //  constructor(title, author, year){
    //    this.title = title;
      //  this.author = author;
        //this.year = year;
    //}
    //getSummary() {
      //      return `${this.title} was written by ${this.author} in ${this.year}`;
        //}
    //}

    //Magazine Subclass
    //class Magazine extends Book {
      //  constructor(title, author, year, month){
        //    super(title, author, year);
          //  this.month = month;
        //}
    //}

    //instantiate Magazine
    //const mag1 = new Magazine('Mag one', 'Obinna Ugwu', '2050', 'Jun');

    //console.log(mag1.getSummary());