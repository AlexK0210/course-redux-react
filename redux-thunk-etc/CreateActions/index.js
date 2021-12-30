import updateList from './book-list';
import updateCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    bookList: updateList(state, action),
    shoppingCart: updateCart(state, action)
  };
};

export default reducer;
