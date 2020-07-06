import axios from './http-common'

import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';

const AddBook = () => {

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCreateBook = async () => {
    await axios.post('/books', {
      title: bookTitle,
      author: bookAuthor
    })
    setSubmitted(true);
  };

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value)
  }

  const handleAuthorChange = (e) => {
    setBookAuthor(e.target.value)
  }

  return (
    <div>
      <input
        onChange={handleTitleChange}
        value={bookTitle}
        type="text"
        placeholder="Title"
        onChange={e => handleTitleChange(e)}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={e => handleAuthorChange(e)}
      />
      <button onClick={e => handleCreateBook(e)}>Create</button>
      {submitted && <Redirect to='/' />}
    </div>
  )
}

export default AddBook
