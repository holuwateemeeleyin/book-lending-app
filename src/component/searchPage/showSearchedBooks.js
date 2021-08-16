import React from 'react'
import BookshelfBooks from '../main-page/bookshelfBooks';
// import BookShelfChanger from '../main-page/bookshelfChanger';

const ShowSearchedBooks = (props) => {

    const { searchBooks, books, onChangeBook } = props
    
    const showBooks = searchBooks.map(searchBook => {
        books.map(book => {
            if (book.id === searchBook.id) {
                searchBook.shelf = book.shelf;
            }
            return book;
        });
        return searchBook
    })
    return (
        <ol className="books-grid">
            {showBooks.map(book => (
                <BookshelfBooks
                    key={book.id}
                    book={book}
                    shelf={book.shelf ? book.shelf :'none'}
                    onChangeBook={onChangeBook}
                />
                // <li>
                //     <div className="book">
                //         <div className="book-top">
                //             <div className="book-cover"
                //                 style={{
                //                     width: 128,
                //                     height: 193,
                //                     backgroundImage: `url(${book.imageLinks.thumbnail})`
                //                 }}>
                //             </div>
                            // <BookShelfChanger onChangeBook={onChangeBook}/>
                            // {/* <div className="book-shelf-changer">
                                // <select>
                                    // <option value="move" disabled>Move to...</option>
                                    // <option value="currentlyReading">Currently Reading</option>
                                    // <option value="wantToRead">Want to Read</option>
                                    // <option value="read">Read</option>
                                    // <option value="none">None</option>
                                // </select>
                            // </div> */}
                        // {/* </div>
                        // <div className="book-title">{book.title}</div>
                        // <div className="book-authors">{book.authors}</div>
                    // </div>
                // </li> */}
            ))}
        </ol>
    )
}
export default ShowSearchedBooks