import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './component/main-page/listBooks'
import { Route } from 'react-router-dom'
// import data from './data/data' //importing stored books data 
import SearchBooks from './component/searchPage/searchBooks'
class BooksApp extends Component {
  state = {
    // books : data // I first saved the data for books on data file before using BooksAPI
    books :[]
  }

  // Fetch Books from BooksAPI
  componentDidMount(){
    BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=> ({
          books //setting the state with books fetched 
        }))
      })   
  }

  onChangeBookShelf =(book, shelf)=>{
    BooksAPI.update(book,shelf)
    if (shelf === 'none') {
      this.setState(currentState => ({
        books:currentState.books.filter(item=>item.id !== book.id)
      }))
    } else {
      book.shelf = shelf;
      this.setState(currentState => ({
        books:currentState.books.filter(item=> item.id !== book.id).concat(book)
      }))
    }
  }

  render() {
    const { books } = this.state
    // Categorizing the Bookshelves in an array, since we have 3 shelves, the id will match our given API data (book.shelf)
    const shelves = [
      {id: 'currentlyReading', category:'Current Reading'},
      {id: 'wantToRead', category:'Want to Read'},
      {id: 'read', category:'Read'}
    ]
    return (
      <div className="app">
        <Route exact path='/' render= {()=> (
          <ListBooks
            books={books}
            shelves={shelves}
            onChangeBook = {this.onChangeBookShelf}
          />
        )} />

        <Route exact path='/search' render= {()=> (
          <SearchBooks
            books={books}
            onChangeBook={this.onChangeBookShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp