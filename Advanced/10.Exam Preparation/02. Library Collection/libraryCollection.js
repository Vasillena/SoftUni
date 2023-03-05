class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error("Not enough space in the collection.");
    } else {
      const book = {
        bookName: bookName,
        bookAuthor: bookAuthor,
        payed: false,
      };
      this.books.push(book);
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
  }
  payBook(bookName) {
    let index = this.books.findIndex((book) => book.bookName === bookName);
    if (index == -1) {
      throw new Error(`${bookName} is not in the collection.`);
    } else if (this.books[index].payed) {
      throw new Error(`${bookName} has already been paid.`);
    } else {
      this.books[index].payed = true;
      return `${bookName} has been successfully paid.`;
    }
    // for(const book of this.books){
    //     if(book.bookName == bookName){
    //         if(book.paid){
    //             throw new Error(`${bookName} has already been paid.`);
    //         }else {
    //             book.paid = true;
    //             return `${bookName} has been successfully paid.`;
    //         }
    //     }
    // }
    // throw new Error(`${bookName} is not in the collection.`);
  }
  removeBook(bookName) {
    let index = this.books.findIndex((book) => book.bookName === bookName);
    if (index == -1) {
      throw new Error(`The book, you're looking for, is not found.`);
    } else if (!this.books[index].payed) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    } else {
      this.books[index].payed = true;
      this.books.splice(index, 1);
      return `${bookName} remove from the collection.`;
    }
    // for (let i = 0; i < this.books.length; i++) {
    //   const element = tthis.books[i];
    //   if (element.bookName == bookName) {
    //     if (!element.paid) {
    //       throw new Error(
    //         `${bookName} need to be paid before removing from the collection.`
    //       );
    //     } else {
    //       this.books.splice(i, 1);
    //       return `${bookName} remove from the collection.`;
    //     }
    //   }
    // }
    // throw new Error(`The book, you're looking for, is not found.`);
  }
  getStatistics(bookAuthor) {
    let result = [];
    result.push(
      `The book collection has ${
        this.capacity - this.books.length
      } empty spots left.`
    );
    this.books
      .sort((a, b) => a.bookName.localeCompare(b.bookName))
      .forEach((x) => {
        result.push(
          `${x.bookName} == ${x.bookAuthor} -` +
            (x.payed ? ` Has Paid.` : ` Not Paid.`)
        );
      });
    if (!bookAuthor) {
      return result.join("\n");
    } else {
      let index = this.books.findIndex(
        (book) => book.bookAuthor === bookAuthor
      );
      if (index == -1) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      } else {
        if (this.books[index].payed) {
          return `${this.books[index].bookName} == ${this.books[index].bookAuthor} - Has Paid.`;
        } else if (!this.books[index].payed) {
          return `${this.books[index].bookName} == ${this.books[index].bookAuthor} - Not Paid.`;
        }
      }
    }
  }
}

const library = new LibraryCollection(2);
console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.addBook("Ulysses", "James Joyce"));

// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// console.log(library.payBook("In Search of Lost Time"));
// console.log(library.payBook("Don Quixote"));

// const library = new LibraryCollection(2);
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// console.log(library.removeBook("Don Quixote"));
// console.log(library.removeBook("In Search of Lost Time"));

// const library = new LibraryCollection(2);
// console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
// console.log(library.getStatistics("Miguel de Cervantes"));

// const library = new LibraryCollection(5);
// library.addBook("Don Quixote", "Miguel de Cervantes");
// library.payBook("Don Quixote");
// library.addBook("In Search of Lost Time", "Marcel Proust");
// library.addBook("Ulysses", "James Joyce");
// console.log(library.getStatistics());
