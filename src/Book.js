import React from 'react';
import placeholder from './images/placeholder.png';

function Book(props) {
 
    const { book, shelf, onShelfChange } = props;

    const handleChange = (event) => {
        if (onShelfChange) {
            onShelfChange(book, event.target.value)
        }
    }

    const thumbnail = book.imageLinks !== undefined ? book.imageLinks.thumbnail : placeholder;

    return (
        <div className="book">
            <div className="book-top">
                {book.imageLinks !== undefined  && (
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 192, 
                            backgroundImage: `url(${thumbnail})` 
                        }}>
                    </div>
                )}
            
            <div className="book-shelf-changer">
                <select value={shelf ? shelf : book.shelf} onChange={handleChange}> 
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

export default Book;