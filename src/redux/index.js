import { combineReducers } from 'redux'
import home from './home'
import products from "./products/reducers"
import categories from "./products/categories/reducers"

export default combineReducers({
  home,
  products,
  categories
})
