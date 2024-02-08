import { Box, Grid, GridItem, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/container'
import MealCard from '../components/meal-card'
import MealSkeletonCard from '../components/meal-skeleton-card'
import { Types } from '../store/action.types'
import { StoreContext } from '../store/store'

const CategoryMeals = () => {
  const { categoryName } = useParams()
  const { state, dispatch } = useContext(StoreContext)

  useEffect(() => {
    dispatch({
      type: Types.FETCHING_MEALS,
    })

    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}
    `)
    .then((res) => {
      dispatch({
        type: Types.FETCHED_MEALS,
        payload: res.data.meals,
      })
    })
  }, [categoryName])
  return (
    <Container>
      <Box
      minH={'100px'} w={'full'} bg={useColorModeValue('gray.200', 'gray.700')} rounded={'lg'} my={'5'} textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'3'} border={'1px'} borderColor={useColorModeValue('gray.300', 'gray.600')}>
        <Heading fontSize={'24px'}>All meals of category: <Text display={'inline'} color={'orange.500'}>{categoryName}</Text></Heading>
      </Box>

      {
        <Grid my={4} gridTemplateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            lg: '1fr 1fr 1fr',
          }}
          gap={'4'}
        >
          {
            state?.isLoading ? Array.from(Array(10).keys())?.map(item => <MealSkeletonCard key={item}/>) : null
          }
          {state.meals.map(item => (
            <GridItem key={item.idMeal}>
              <MealCard meal={item}/>
            </GridItem>
          ))}
        </Grid>
      }
    </Container>
  )
}

export default CategoryMeals