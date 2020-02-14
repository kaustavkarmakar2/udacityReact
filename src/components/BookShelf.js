import React from "react";
import * as BooksAPI from '../BooksAPI';

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books:[]
    }
  }

  componentDidMount = () => {
    this.fetchInfo();
  };
  fetchInfo = () => {
    BooksAPI.getAll().then(resp => 
    
      this.setState({ books: resp })
      );
  };
  changeBookShelvesForBooks = (book, shelf) => {
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
    console.log("books inside render",this.state.books);
    // const shelfForBooks = this.props.books;
    // const{shelf}=this.props
    console.log("this props",this.state.books);
    // const shelves = {
    //   currentlyReading: ["Currently Reading", "currentlyReading"],
    //   wantToRead: ["Want to Read", "wantToRead"],
    //   read: ["Read", "read"]
    // };
    
    return (
      <React.Fragment>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.state.books.filter(book => book.shelf === 'currentlyReading').map((book, index) => {
                  console.log("books",book)
              // this.state.books.map(book => {
                let imageURL
                
                if (book.shelf !== undefined) {
                  imageURL = book.imageLinks
                    ? book.imageLinks.thumbnail 
                    : "http://via.placeholder.com/123x98";
              }
                
               
              return (
                
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
                        value={book.shelf}
                        onChange={event =>
                          this.changeBookShelvesForBooks(book, event.target.value)
                        }
                        // allBooksForSheveles={this.state.books}
                        // changeShelf={this.changeBookShelvesForBooks}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to read</option>
                        <option value="read">read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                    Ï
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  
                </div>
              </li> 
              )
            })
            
              
              
              }
              
            </ol>
            </div>
            <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.state.books.filter(book => book.shelf === 'wantToRead').map((book, index) => {
                  console.log("books",book)
              // this.state.books.map(book => {
                let imageURL
                
                if (book.shelf !== undefined) {
                  imageURL = book.imageLinks
                    ? book.imageLinks.thumbnail 
                    : "http://via.placeholder.com/123x98";
              }
                
               
              return (
                
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
                          value={book.shelf}
                          onChange={event =>
                            this.changeBookShelvesForBooks(book, event.target.value)
                          }
                          // allBooksForSheveles={this.state.books}
                          // changeShelf={this.changeBookShelvesForBooks}
                        >
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                              Currently Reading
                          </option>
                          <option value="wantToRead">Want to read</option>
                          <option value="read">read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      Ï
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    
                  </div>
                </li> 
              )
            })
            
              
              
              }
              
            </ol>
            </div>

            <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {
                this.state.books.filter(book => book.shelf === "read").map((book, index) => {
                  console.log("books",book)
              // this.state.books.map(book => {
                let imageURL
                
                if (book.shelf !== undefined) {
                  imageURL = book.imageLinks
                    ? book.imageLinks.thumbnail 
                    : "http://via.placeholder.com/123x98";
              }
                
               
              return (
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
                          value={book.shelf}
                          onChange={event =>
                            this.changeBookShelvesForBooks(book, event.target.value)
                          }
                          // allBooksForSheveles={this.state.books}
                          // changeShelf={this.changeBookShelvesForBooks}
                        >
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                              Currently Reading
                          </option>
                          <option value="wantToRead">Want to read</option>
                          <option value="read">read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      Ï
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                    
                  </div>
                </li> 
              )
            })}
              
          </ol>
        </div>
        
      </div>
      </React.Fragment>
    );
  }
}
export default BookShelf;
