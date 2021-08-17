import React, { Component } from 'react'

class BookShelfChanger extends Component {
    state = {
        value:this.props.shelf,                 //passing the shelf.id in props as value
    }
    handleOnChange = event=> {
        const { value } = event.target
        this.setState({ value })
        this.props.onChangeBook(this.props.book, value)         //passing books and the value(shelf.id) as aruguement
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleOnChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;