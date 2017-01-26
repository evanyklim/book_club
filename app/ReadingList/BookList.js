import React from 'react'
import Book from './Book'

let books = [
  {id: 1, author: "Cory Brown", title: "My 2 scents"},
  {id: 2, author: "Jared Anderson", title: "Let me put it this way. You've heard of Socrates? Aristotle? Plato? Morons!"},
  {id: 3, author: "Matt Poulson", title: "It's just a function!"},
  {id: 4, author: "Bruce Campbell", title: "Fish in a tree? How can that be?"}
];

export { books }

const BookList = (props) => (
  <div className="bookList">
    { props.books.map(book => (
      <Book author={ book.author } key={book.id} >
        { book.title }
      </Book>
    )) }
  </div>
);

export default BookList