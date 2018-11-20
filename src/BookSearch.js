import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import Book from './Book';

class BookSearch extends Component {
  state = {
    results: [],
    query: ''
  };

  updateQuery(e) {
    const query = e.target.value;
    this.setState({ query : query.trim()})
    this.search(query)
  }

  search(query) {
    if (query === '' || query === undefined){
      this.setState({ results: [] });
      return;
    }
    else {
      BooksAPI.search(query).then((books) => {
        this.setState({ results: books })
      })
    }
  }

  render() {
    let message;
    if (this.state.query === '') {
      message = (
        <h2 style={{ textAlign: 'center' }}>
          Start searching the books
        </h2>
      );
    } else if (this.state.results.length === 0) {
      message = (
        <h2 style={{ textAlign: 'center' }}>
          No results found. Try a different book.
        </h2>
      );
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {message}
          <ol className="books-grid">
            {this.state.results.map((book) => (
                book.shelf = "none",
                this.props.books.map((b) => {
                  (b.id === book.id)? book.shelf = b.shelf : ''
                }),
                <Book
                  book={book}
                  shelfChange={this.props.shelfChange}
                />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChange: PropTypes.func.isRequired
};

export default BookSearch;