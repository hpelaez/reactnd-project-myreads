import React from 'react';
import Library from './Library';
import SearchBooks from './SearchBooks';
import Page404 from './Page404';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  async getAllBooks() {
    const books = await BooksAPI.getAll();
    this.setState({ books })
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
        <Switch>
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
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
