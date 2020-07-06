import React, { useState, useEffect } from 'react';
import axios from './http-common';
import { Link } from 'react-router-dom';

import DeleteBook from './DeleteBook';

const ViewBooks = () => {

  const [booksState, setBooksState] = useState(null);

  const getBooks = async () => {
    let response = await axios.get(`/books`);
    setBooksState(response.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`/books/${id}`)
    setBooksState(booksState.filter((book) => book.id !== id))
  }

  useEffect(() => {
    getBooks();
  }, [])


  return (
    <div>
      {booksState && booksState.map((book, index) => (
        <li key={index}>
          <Link to={`/books/${book.id}`}>
            {book.title}
          </Link> 
          by {book.author}
          <DeleteBook handleClick={() => deleteBook(book.id)} />
        </li>
      ))}
    </div>
  )
}

export default ViewBooks;