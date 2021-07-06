import React from 'react';
import Book from './Book';

function Bookshelf(props) {
    const { title, shelf, data, onUpdateShelf } = props;

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

export default Bookshelf;