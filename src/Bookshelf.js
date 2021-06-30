import React from 'react';
import Book from './Book';

function Bookshelf(props) {

    const { title, id, data } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {data.map(book => (
                        book.shelf === id &&
                        <li key={book.id}> 
                            <Book book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf;