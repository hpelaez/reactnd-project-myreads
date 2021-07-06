import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
    state = {
        query: '',
        filteredBooks: []
    }

    UpdateQuery = (query) => {
        this.setState({ query });
        
        if (query.length > 0) {
            BooksAPI.search(query).then((data) => { 
                if(!data.error) {
                    this.setState({ filteredBooks: data });
                } else {
                    this.setState({ filteredBooks: [] });
                }
            })
        } else {
            this.setState({ filteredBooks: [] });
        }
    }

    render() {
        const { books, onUpdateShelf } = this.props;
        const { search, filteredBooks } = this.state;

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
                        {filteredBooks.map((filtered) => {
                            let bookOnShelf = books.find((book) =>
                                book.id === filtered.id
                            );
                            if (bookOnShelf) {
                                filtered.shelf = bookOnShelf.shelf;
                            } else {
                                filtered.shelf = 'none';
                            }
                    
                            return (
                                <li key={filtered.id}>
                                    <Book 
                                        book={filtered} 
                                        shelf={filtered.shelf}
                                        onShelfChange={onUpdateShelf}
                                    />
                                </li>
                            )
                        })}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchBooks;