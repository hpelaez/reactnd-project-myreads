import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const { title, shelf, data, onUpdateShelf } = this.props;

        return (
            <div className="bookshelf">     
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {data.filter((item) => item.shelf === shelf).map((book) => (
                            <li key={book.id}> 
                                <Book 
                                    book={book}
                                    shelf={shelf}
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

export default Bookshelf;