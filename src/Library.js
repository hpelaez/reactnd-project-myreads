import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Library extends Component {
    render() {

        const { books } = this.props;

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
                  {shelves.map(shelve => (
                      <Bookshelf 
                        title={shelve.title} 
                        key={shelve.id} 
                        id={shelve.id}
                        data={books}
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