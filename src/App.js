import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
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
      <div className="app">
        <BookList onShelfChange={this.props.shelfChange} books={this.state.books} />

      </div>
    )
  }
}

export default App
