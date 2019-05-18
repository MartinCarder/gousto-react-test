import { combineReducers } from 'redux'
import home from './home'
import products from "./products/categories/reducers"

export default combineReducers({
  home,
  products
})
