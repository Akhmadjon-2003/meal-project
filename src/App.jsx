import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Basket from './screens/basket'
import CategoryMeals from './screens/category-meals'
import Home from './screens/home'
import MealDetails from './screens/meal-details'
import SearchMeals from './screens/search-meals'
import { initialState, reducer } from './store/reducer'
import { StoreContext } from './store/store'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{state, dispatch,}}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/category-meals/:categoryName' element={<CategoryMeals/>}/>
          <Route path='/meals' element={<SearchMeals/>}/>
          <Route path='meal-info/:idMeal' element={<MealDetails/>}/>
        </Route>
      </Routes>
    </StoreContext.Provider>
  )
}

export default App