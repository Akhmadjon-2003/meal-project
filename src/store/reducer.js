import { Types } from "./action.types"

export const initialState = {
  meals: [],
  basket: [],
  categories: [],
  isLoading: false,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.FETCHING_MEALS: {
      return {
        ...state,
        isLoading: true,
      }
    }
      break
    case Types.FETCHED_MEALS: {
      return {
        ...state,
        isLoading: false,
        meals: action.payload,
      }
    }
      break
    case Types.FETCHING_CATEGORIES: {
      return {
        ...state,
        isLoading: true,
      }
    }
      break
    case Types.FETCHED_CATEGORIES: {
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      }
    }
      break
    case Types.ADD_TO_BASKET: {
      const mealidInBasket = state.basket.findIndex(x => x.idMeal === action.payload.idMeal)
      return {
        ...state,
        basket: mealidInBasket === -1 ? [action.payload, ...state.basket] : state.basket,
      }
    }
      break
    case Types.REMOVE_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter(item => item.idMeal !== action.payload),
      }
    }
  }
}