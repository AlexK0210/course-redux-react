const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksReq());
  bookstoreService.getBooks()
      .then((data) => dispatch(booksLoad(data)))
      .catch((err) => dispatch(booksError(err)));
};


const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
  };
};

export const bookAdd = (bookId) => {
  return {
    type: 'BOOK_ADDED',
    payload: bookId
  };
};

export const bookRemove = (bookId) => {
  return {
    type: 'BOOK_REMOVED',
    payload: bookId
  };
};


const booksReq = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  };
};

const booksLoad = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

export const removeAllBooks = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED',
    payload: bookId
  };
};

export {
  fetchBooks
};
