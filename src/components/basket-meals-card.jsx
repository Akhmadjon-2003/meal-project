import { Box, Button, Card, Image, Icon, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaShoppingBasket, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Types } from '../store/action.types'
import { StoreContext } from '../store/store'
import { BsCartCheck } from "react-icons/bs";


const BasketMealCard = ({ meal }) => {
  const { state, dispatch } = useContext(StoreContext)
  const toast = useToast()
  const removeFromBasket = () => {
    dispatch({
      type: Types.REMOVE_FROM_BASKET,
      payload: meal.idMeal,
    })
    toast({
      title: 'Meal removed from basket',
      status: 'info',
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
      <Button onClick={removeFromBasket} pos={'absolute'} top={'10px'} right={'10px'} variant={'solid'}  colorScheme={'red'} shadow={'md'}>
        <Icon as={FaTrash}/>
      </Button>
    </Card>
  )
}

export default BasketMealCard