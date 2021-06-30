import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    state = {
        search: ''
    }

    UpdateQuery = (value) => {
        this.setState({ search: value })
    }

    render() {
        const { books } = this.props;
        const { search } = this.state;

        const showingBooks = search === ''
            ? []
            : books.filter((c) => (
                c.title.toLowerCase().includes(search.toLowerCase())
            ))

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={search}
                            onChange={(event) => this.UpdateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book}/>
                            </li>
                        ))}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchBooks;