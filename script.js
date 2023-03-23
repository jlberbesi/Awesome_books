class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.bookList = document.getElementById('book-list');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    document.getElementById('book-form').addEventListener('submit', (e) => {
      e.preventDefault();
      this.addBook();
    });
    this.displayBooks();
  }

  addBook() {
    const book = {
      title: this.titleInput.value,
      author: this.authorInput.value,
      remove: () => {
        this.books = this.books.filter((b) => b.title !== book.title);
        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayBooks();
      },
    };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
    this.titleInput.value = '';
    this.authorInput.value = '';
<<<<<<< HEAD
=======

>>>>>>> d8753604ecc2ae71d7d6e735254ffcca6ab9d1f4
    const message = document.createElement('p');
    message.textContent = 'A new book was added';
    message.classList.add('message');
    document.getElementById('book-form').appendChild(message);
    setTimeout(() => message.remove(), 3000);
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.books.forEach((book) => {
      const li = document.createElement('li');
      li.classList.add('book');
      const title = document.createElement('span');
      title.textContent = book.title;
      li.appendChild(title);
      const author = document.createElement('span');
      author.textContent = ` by ${book.author}`;
      li.appendChild(author);
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      li.appendChild(removeBtn);
      removeBtn.addEventListener('click', () => {
        book.remove();
      });
      this.bookList.appendChild(li);
    });
  }
}
/* eslint-disable no-unused-vars */
const bookList = new BookList();
/* eslint-disable no-unused-vars */