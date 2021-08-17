import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'
import ShowSearchedBooks from './showSearchedBooks';

class SearchBooks extends Component {
    state= {
        query:'',
        searchBooks:[]
    }

    // onChange for event handler when an input is been entered
    onsearchQuery =(event)=> {
        let keyword = event.target.value
        this.setState({
            query:keyword
        }, ()=> {
            this.searchingBooks(keyword)
        })
    }

    // funtions for search book from the API given
    searchingBooks =(query)=> {
        // if a string is entered, search for it
        if (query.length > 0){
            BooksAPI.search(query)
                .then(books=> {
                    if(!books.error){ //if entry is found, return books
                        this.setState({searchBooks:books})
                    } else { //instead of returning an error when it is not found, return an empty array of books
                        this.setState({searchBooks:[]})
                    }
                })
        } else {
            this.setState ({searchBooks:[]}) //Return empty array if nothing is searched on the search input
        }
    }
    resetPage = ()=>{
        this.setState({
            searchBooks:[]          // reset page when back button is clicked
        })
    }
    render() {
        const { searchBooks } = this.state
        const { books, onChangeBook } = this.props
        
        // const showBooks = books.filter((book) => {
        //     if(query === '') return null
        //     else if(book.authors.toString().toLowerCase().includes(query.toLowerCase())){
        //         return book
        //     }
        // }).map(book=> (
        //     <li key={book.id}> {book.authors}</li>
        // ))
        // console.log(showBooks);
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' >
                        <button className="close-search" onClick={this.resetPage}>
                            Close
                        </button>
                    </Link>
                    <div className="search-books-input-wrapper">
                    <input 
                    value={this.state.query}
                    type="text" 
                    placeholder="Search by title or author" 
                    onChange={(e)=> this.onsearchQuery(e)}
                    autoFocus
                    />
                    </div>
                </div>
                <div className="search-books-results">
                    <ShowSearchedBooks
                            searchBooks={searchBooks}
                            books={ books }
                            onChangeBook={onChangeBook}
                        />
                </div>
            </div>
        )
    }
}
export default SearchBooks;