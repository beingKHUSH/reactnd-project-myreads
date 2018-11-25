import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book key={book.id} book={book} shelfChange={props.shelfChange}/>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  shelfChange: PropTypes.func.isRequired
}

export default BookShelf;
