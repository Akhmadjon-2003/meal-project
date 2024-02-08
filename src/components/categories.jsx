import { Card, Grid, GridItem, Image, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Types } from '../store/action.types'
import { StoreContext } from '../store/store'
import CategorySkeletonCard from './category-skeleton-card'

const Categories = () => {
  const { state, dispatch} = useContext(StoreContext)
  const cardColor = useColorModeValue('gray.200', 'gray.700')
  useEffect(() => {
    dispatch({
      type: Types.FETCHING_CATEGORIES,
    })
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res) => {
      dispatch({
        type: Types.FETCHED_CATEGORIES,
        payload: res.data.categories,
      })
    })
  }, [])


  console.log(state)
  return (
    <Grid gridTemplateColumns={{
      base: '1fr',
      sm: '1fr 1fr',
      lg: '1fr 1fr 1fr',
    }} my={'4'} gap={'4'}>
      {
        state?.isLoading && Array.from(Array(10).keys()).map(x =>
          <CategorySkeletonCard key={x}/>)
      }
      {
        state.categories.map((item) => (
          <GridItem key={item.idCategory}>
            <Link to={`/category-meals/${item.strCategory}`}>
              <Card bg={cardColor}>
                <Image objectFit={'cover'} p={2} src={item.strCategoryThumb}/>
                <Text my={2} textAlign={'center'} fontSize={'24px'}>{item.strCategory}</Text>
              </Card>
            </Link>
          </GridItem>
        ))
      }
    </Grid>
  )
}

export default Categories