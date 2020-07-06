import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewBook = (props) => {
  const [bookState, setBookState] = useState(null);
  const [errorState, setErrorState] = useState(null);

  const getBook = async () => {
    try {
      let response = await axios.get(`http://localhost:3000/books/${props.match.params.id}`);
      setBookState(response.data);
    } catch(error) {
      setErrorState(error.message);
    }
  }

  useEffect(() => {
    getBook();
  }, [])


  return (
    <>
      <div>
        {errorState && "There was an error, please try again"}
        {bookState && <li>{bookState.title} by {bookState.author}</li>}
      </div>
      <Link to="/">Go Home</Link>
    </>
  )
}

export default ViewBook;
