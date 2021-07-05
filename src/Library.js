import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Library extends Component {
    render() {

        const { books, onUpdateShelf } = this.props;

        const shelves = [
            {
                title: 'Currently Reading',
                id: 'currentlyReading'
              },
              {
                title: 'Want To Read',
                id: 'wantToRead'
              },
              {
                title: 'Read',
                id: 'read'
              }
        ];

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  {shelves.map(shelf => (
                      <Bookshelf 
                        title={shelf.title} 
                        key={shelf.id} 
                        shelf={shelf.id}
                        data={books}
                        onUpdateShelf={onUpdateShelf}
                    />
                  ))}
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