import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component for rendering a book list
 */
class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookShelfChanged: PropTypes.func.isRequired,
  };

  render() {
    const { book } = this.props;
    const { onBookShelfChanged } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}/>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event) => onBookShelfChanged(event, book)}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {/* Use short-circuit operator because book.authors might be undefined */}
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
      </li>
    );
  }
}

export default BookItem;
