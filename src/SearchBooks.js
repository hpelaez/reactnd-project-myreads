import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
    state = {
        search: '',
        filteredBooks: []
    }

    UpdateQuery = (value) => {
        let query = value.trim();
        this.setState({ search: query });
        
        if (query !== '') {
            BooksAPI.search(query)
            .then((data) => { 
                if(!data.error) {
                  this.setState({ filteredBooks: data })
                }
            })
        }
    }

    render() {
        const { onUpdateShelf } = this.props;
        const { search, filteredBooks } = this.state;

        const showingBooks = filteredBooks === undefined && search === ''
            ? []
            : filteredBooks.filter((book) => 
                book.title.toLowerCase().indexOf(search.toLowerCase()) > -1
            )

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
                                <Book 
                                    book={book} 
                                    onShelfChange={onUpdateShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchBooks;