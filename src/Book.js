import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    update_Shelf: PropTypes.func.isRequired
  }

  state = {
    shelf: ''
  }

  change_bookShelf = (e) => {
    this.props.onUpdate(e.target.value)
  }

  render() {
    return (
        console.log(this.props.book),
        <li key={this.props.book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select onChange={this.change_bookShelf} value={this.props.book.shelf}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>

    )
  }
}

export default Book
