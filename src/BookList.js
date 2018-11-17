import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends Component {
  BookList.PropTypes = {
    books : PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }
  onChangeShelf = (book, shelf) => {
    this.props.onShelfChange(book, shelf)
  }
  render() {
    const books = this.props.books
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" onChangeShelf={this.props.onShelfChange}/>
            <BookShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" onChangeShelf={this.props.onShelfChange}/>
            <BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" onChangeShelf={this.props.onShelfChange}/>
          </div>
        </div>
      </div>
    )
  }
}

export default BookList
