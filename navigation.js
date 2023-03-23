


let bookForm = document.getElementById('book-form');
let bookLists = document.getElementById('book-list');
let contact = document.getElementById('contact');

let add = document.getElementById('add');
let list = document.getElementById('list');
let contactInfo = document.getElementById('contact-info');

bookForm.style.display = 'flex';
bookLists.style.display = 'none';
contact.style.display = 'none';


add.addEventListener('click', () => {
  bookForm.style.display = 'flex';
  bookLists.style.display = 'none';
  contact.style.display = 'none';
});

list.addEventListener('click', () => {
  bookForm.style.display = 'none';
  bookLists.style.display = 'flex';
  contact.style.display = 'none';
});

contactInfo.addEventListener('click', () => {
  bookForm.style.display = 'none';
  bookLists.style.display = 'none';
  contact.style.display = 'flex';
});

