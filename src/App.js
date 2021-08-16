import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './component/main-page/listBooks'
import { Route } from 'react-router-dom'
// import data from './data/data'
import SearchBooks from './component/searchPage/searchBooks'
class BooksApp extends React.Component {
  state = {
    // books : data // I first saved the data for books on data file before using BooksAPI
    books :[]
  }

  // Fetch Books from BooksAPI
  componentDidMount(){
    BooksAPI.getAll()
      .then((books)=>{
        this.setState(()=> ({
          books
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


// componentDidMount(){
  //   BooksAPI.getAll()
  //     .then ((books)=> {
  //       this.setState(()=> ({
  //         books
  //       }))
  //     })
  //   }
   /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false