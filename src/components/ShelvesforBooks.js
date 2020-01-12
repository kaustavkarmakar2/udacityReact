import React from "react";
import BookShelf from "./BookShelf";
// import * as BooksAPI from '../BooksAPI';


class ShelvesForBooks extends React.Component {
  state = {
    books: [],
    shelf: ""
  };
  // changeBookShelvesForBooks = (book, shelf) => {
  //   console.log("Hiii", this);
  //   BooksAPI.update(book, shelf);
  //   this.setState({
  //     books: this.state.books.map(b => {
  //       return {
  //         ...b,
  //         shelf: b.id === book.id ? shelf : b.shelf
  //       };
  //     })
  //   });
  // };
 
  render() {
    const shelves = {
      currentlyReading: ["Currently Reading", "currentlyReading"],
      wantToRead: ["Want to Read", "wantToRead"],
      read: ["Read", "read"]
    };
    
    
    console.log(shelves);
    //  const allBooksForSheveles = this.props.allBooksForShevele;
    // const currentlyReading = allBooksForSheveles.filter(
    //   book => book.shelf === "currentlyReading"
    // );
    // const wantToRead = allBooksForSheveles.filter(
    //   book => book.shelf === "wantToRead"
    // );
    // const read = allBooksForSheveles.filter(book => book.shelf === "read");
    //  console.log("fff", allBooksForSheveles);

    return (
      <div className="list-books-content">
        <div className="list-books-content">
          {/* {Object.keys(shelves).map(shelf => ( */}
            <BookShelf 
             
              // key={shelf}
              // shelf={shelf}
              // books={this.state.books}
              // onShelfChange={() => {
              //   this.props.changeShelf(shelf);
              // }}
            />
          {/* ))} */}
          <div>
       
      
     </div> 
        </div>
      </div>
    );
  }
}
export default ShelvesForBooks;


  /* <div>
       
          <BookShelf
            books={currentlyReading}
            title={"Currently Reading"}
            changeShelf={this.props.changeShelf}
          />
          
          <BookShelf
            books={wantToRead}
            title={"Want To Read"}
            changeShelf={this.props.changeShelf}
          />
        
          <BookShelf
            books={read}
            title={"Read"}
            changeShelf={this.props.changeShelf}
          />
        </div> */

