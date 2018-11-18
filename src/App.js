import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route } from 'react-router-dom';
import BookSearch from './BookSearch';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI';

class App extends React.Component {
  state = {
    books: [],
  }

  shelfChange = (book,shelf) => {
    BooksAPI.update(book,shelf)
    .then(() => { this.fetchBooks(); })
    .catch(() => { alert('Something went with the request.');})
  };

  fetchBooks() {
    BooksAPI.getAll()
    .then(books => this.setState({ books }))
    .catch(() => { alert('Something went with the request.');})
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookList shelfChange={this.shelfChange} books={this.state.books} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <BookSearch books={this.state.books} shelfChange={this.shelfChange} />
          )}
        />
      </div>
    )
  }
}

export default App;
