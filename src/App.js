import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class App extends React.Component {
  state = {
    books: [],
    showSearchPage: false

  }

  fetchNewBooks = () => (
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  )

  shelfChange = (book,shelf) => (
    BooksAPI.update(book,shelf).then(() =>
      this.fetchNewBooks()
    )
  )

  componentDidMount() {
    this.fetchNewBooks()
  }

  render() {
    return (
      <BookList onShelfChange={this.shelfChange} books={this.state.books} />
      <BookSearch />
    )
  }
}

export default App
