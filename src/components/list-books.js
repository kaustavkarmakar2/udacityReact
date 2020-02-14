import React from "react";
import * as BooksAPI from "../BooksAPI";

class List extends React.Component {
  state = {
    books: [],
    query: "",
    shelves:[]
  };
  changeBookShelves = (book, shelf) => {
    console.log("Hiii", book, shelf);
    BooksAPI.update(book, shelf);
    this.setState({
      books: this.state.books.map(b => {
        return {
           ...b,
          shelf: b.id === book.id ? shelf : b.shelf
        };
      }),
      shelves: this.state.shelves.length ? this.state.shelves.map(b => {
        return {
           ...b,
          shelf: b.id === book.id ? shelf : b.shelf,
        };
      }) : [{
        id: book.id,
        shelf: shelf
      }]
    });
  };
  handleClick = () => {
    this.changeBookShelves();
  };
  render() {
    let shelves = this.state.shelves
    // console.log(shelves,this.props.shelves)
    return (
      <React.Fragment>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => {
                shelves = [...shelves, ...this.props.shelves].filter(s=>{return s.id===book.id})
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
                          value={shelves.length?shelves[0].shelf:'none'}
                          
                          // onBookShelfChange={this.props.onBookShelfChange}
                          onChange={event =>
                            this.changeBookShelves(book, event.target.value)
                          }
                          onSearchClick={this.handleClick}
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
                        {console.log("shelf",this.props.shelves.filter(s=>{return s.id===book.id}))}
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
