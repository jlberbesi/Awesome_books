const bookList = document.getElementById('book-list');
const addBookForm = document.getElementById('add-book-form');

// Load the books from localStorage or use an empty array
const books = JSON.parse(localStorage.getItem('books')) || [];

function displayBooks() {
  // Clear the current book list
  bookList.innerHTML = '';

  // Add each book to the list
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.innerText = `${book.title} by ${book.author}`;
    bookList.appendChild(li);

    // Add a remove button to each book
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    li.appendChild(removeButton);

    // Add an event listener to the remove button
    removeButton.addEventListener('click', () => {
      // Remove the book from the collection
      books.splice(index, 1);

      // Save the updated book collection to localStorage
      localStorage.setItem('books', JSON.stringify(books));

      // Remove the book from the page
      li.remove();
    });
  });
}

function addBookToCollection(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the form inputs
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;

  // Add the new book to the collection
  books.push({ title, author });

  // Clear the form inputs
  addBookForm.reset();

  // Save the updated book collection to localStorage
  localStorage.setItem('books', JSON.stringify(books));

  // Display the updated book list
  displayBooks();
}

// Display the initial book list
displayBooks();

// Add an event listener to the form submission
addBookForm.addEventListener('submit', addBookToCollection);