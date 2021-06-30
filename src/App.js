import React from 'react'
import Library from './Library'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library />
        )} />
        <Route path='search' render={({ history }) => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
