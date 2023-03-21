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
  }

  displayBooks() {
    this.bookList.innerHTML = '';

    this.books.forEach((book) => {
      const div = document.createElement('div');

      const title = document.createElement('span');
      title.textContent = book.title;
      div.appendChild(title);
      div.appendChild(document.createElement('br'));

      const author = document.createElement('span');
      author.textContent = book.author;
      div.appendChild(author);
      div.appendChild(document.createElement('br'));
      div.appendChild(document.createElement('hr'));

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      div.appendChild(removeBtn);
      div.appendChild(document.createElement('br'));
      div.appendChild(document.createElement('br'));

      removeBtn.addEventListener('click', () => {
        book.remove();
      });

      this.bookList.appendChild(div);
    });
  }
}

const bookList = new BookList();
console.log(bookList);