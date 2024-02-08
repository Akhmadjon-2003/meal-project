import { Box, Button, Card, Image, Icon, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Types } from '../store/action.types'
import { StoreContext } from '../store/store'
import { BsCartCheck } from "react-icons/bs";


const MealCard = ({ meal }) => {
  const { state, dispatch } = useContext(StoreContext)
  const mealExistInCart = state?.basket?.findIndex(item => item.idMeal === meal.idMeal) !== -1 ? true : false
  const toast = useToast()
  const addToBasket = () => {
    dispatch({
      type: Types.ADD_TO_BASKET,
      payload: meal,
    })
    toast({
      title: 'Meal added to basket',
      status: 'success',
      position: 'top',
    })
  }
  return (
    <Card pos={'relative'} h={'300px'}>
      <Image
        inset={'0'}
        h={'full'}
        w={'full'}
        objectFit={'cover'}
        pos={'absolute'}
        rounded={'md'}
      src={meal.strMealThumb}/>
      <Box
        pos={'absolute'}
        right={'10px'}
        bottom={'10px'}
        left={'10px'}
        h={'50px'}
        textAlign={'center'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        rounded={'lg'}
        bg={'orange.500'}
        color={'white'}
      >
        <Link to={`/meal-info/${meal.idMeal}`}>{meal.strMeal}</Link>
      </Box>
      <Button onClick={addToBasket} pos={'absolute'} top={'10px'} right={'10px'} variant={'solid'} isDisabled={mealExistInCart} colorScheme={'orange'} shadow={'md'}>
        <Icon as={mealExistInCart ? BsCartCheck : FaShoppingBasket}/>
      </Button>
    </Card>
  )
}

export default MealCard