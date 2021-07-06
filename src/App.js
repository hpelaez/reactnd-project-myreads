import React from 'react';
import Library from './Library';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  getAllBooks() {
    BooksAPI.getAll().then((data) => {
      this.setState({ books: data })
    })
  }

  componentDidMount() {
    this.getAllBooks();
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library 
            books={this.state.books}
            onUpdateShelf={this.handleShelfChange}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks 
            books={this.state.books}
            onUpdateShelf={this.handleShelfChange}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
