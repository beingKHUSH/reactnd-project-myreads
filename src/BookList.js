import React, { Component } from 'react';
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class BookList extends Component {
  static propTypes = {
    books : PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
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
            <BookShelf books={books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" change_bookShelf={this.props.onShelfChange}/>
            <BookShelf books={books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" change_bookShelf={this.props.onShelfChange}/>
            <BookShelf books={books.filter((book) => (book.shelf === "read"))} title="Read" change_bookShelf={this.props.onShelfChange}/>
          </div>
        </div>
      </div>
    )
  }
}

export default BookList
