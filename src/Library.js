import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import Bookshelf from './Bookshelf';

class Library extends Component {
    render() {

        const { books } = this.props;

        console.log(books);

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" book={
                    <ol className="books-grid">
                        {books.map((book) => (
                            book.shelf === 'currentlyReading' &&
                            <li key={book.id}> 
                                <Book book={book}/>
                            </li>
                        ))}
                    </ol>
                } />
                    
                <Bookshelf title="Want to Read" book={
                    <ol className="books-grid">
                        {books.map((book) => (
                            book.shelf === 'wantToRead' &&
                            <li key={book.id}> 
                                <Book book={book}/>
                            </li>
                        ))}
                    </ol>
                } /> 

                <Bookshelf title="Read" book={
                    <ol className="books-grid">
                        {books.map((book) => (
                            book.shelf === 'read' &&
                            <li key={book.id}> 
                                <Book book={book}/>
                            </li>
                        ))}
                    </ol>
                } /> 
              </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Library;