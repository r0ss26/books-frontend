import React from 'react'

const DeleteBook = (props) => {
  return (
    <span onClick={props.handleClick} role="img" aria-label="delete button" style={{cursor: 'pointer'}}>
      &#10060;
    </span>
  )
}

export default DeleteBook;
