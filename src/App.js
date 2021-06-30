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

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library 
            books={this.state.books}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks 
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
