import React, { Component } from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function BookList(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf books={props.books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" shelfChange={props.shelfChange}/>
          <BookShelf books={props.books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" shelfChange={props.shelfChange}/>
          <BookShelf books={props.books.filter((book) => (book.shelf === "read"))} title="Read" shelfChange={props.shelfChange}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

BookList.propTypes = {
  books : PropTypes.array.isRequired,
  shelfChange: PropTypes.func.isRequired
};

export default BookList;
