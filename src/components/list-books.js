import React from "react";
import * as BooksAPI from "../BooksAPI";

class List extends React.Component {
  state = {
    books: [],
    query: ""
  };
  changeBookShelves = (book, shelf) => {
    console.log("Hiii", this);
    BooksAPI.update(book, shelf);
    this.setState({
      books: this.state.books.map(b => {
        return {
           ...b,
          shelf: b.id === book.id ? shelf : b.shelf
        };
      })
    });
  };

  render() {
    // const shelves = {
    //   currentlyReading: ["Currently Reading", "currentlyReading"],
    //   wantToRead: ["Want to Read", "wantToRead"],
    //   read: ["Read", "read"]
    // };
    
    return (
      <React.Fragment>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => {
                
                let imageURL
                if (book !== undefined) {
                  imageURL = book.imageLinks
                    ? book.imageLinks.thumbnail 
                    : "http://via.placeholder.com/123x98";
              }return (

                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${imageURL})`
                         
                        }}
                      ></div>

                      <div className="book-shelf-changer">
                        <select
                          className="id"
                          value="none"
                          
                          // onBookShelfChange={this.props.onBookShelfChange}
                          onChange={event =>
                            this.changeBookShelves(book, event.target.value)
                          }
                          
                          
                        >
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                          currentlyReading
                          </option>
                          <option value="wantToRead">Want to read</option>
                          <option value="read">read</option>
                          <option value="none">None</option>
                        </select>
                        {console.log("shelf",book)}
                      </div>
                      Ï
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    
                  </div>
                </li> 
              )})}
             
            </ol>
            </div>
          </div>
    </React.Fragment>
     
    );
  }
}
export default List;
