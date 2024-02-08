import { Box, Grid, GridItem, Heading, Input, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../components/container'
import MealCard from '../components/meal-card'
import MealSkeletonCard from '../components/meal-skeleton-card'
import { Types } from '../store/action.types'
import { StoreContext } from '../store/store'

const SearchMeals = () => {
  const params = useLocation()
  const[searchStr, setSearchStr] = useState(location.search.split('=')[1])
  const{state, dispatch} = useContext(StoreContext)
  useEffect(() => {
    dispatch({
      type: Types.FETCHING_MEALS,
    })
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchStr}`)
    .then(res => {
      dispatch({
        type: Types.FETCHED_MEALS,
        payload: res.data.meals
      })
    })
  }, [searchStr])
  return (
    <Container>
      <Box my={5}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'300px'} w={'full'} bgImage={useColorModeValue('https://t3.ftcdn.net/jpg/03/36/70/52/360_F_336705231_zQvPTsKvOxYoxJx1YuD1Zfx9eprt0XTp.jpg', 'https://i.pinimg.com/736x/11/d4/8f/11d48f847df7a89c9f58480f32425940.jpg')} bgPos={'center'} bgSize={'cover'} rounded='lg' flexDir={'column'} shadow={'md'}>
          <Heading display={'flex'} gap={'2'} textAlign={'center'} mb={'4'}>Search your favourite meal...</Heading>
          <Box mt={'3'} bg={useColorModeValue('white', 'gray.900')} rounded={'md'} w={{
            base: '90%',
            md: '500px',
          }}>
            <form onSubmit={(e) => {
              e.preventDefault()
              setSearchStr(e.target[0].value)
            }}>
              <Input defaultValue={searchStr} placeholder='Enter favorite meal...' w={'full'} colorScheme={'orange'} variant={'outline'} textColor={useColorModeValue('gray.900', 'gray.200')}/>
            </form>
          </Box>
        </Box>
        <Grid my={4} gridTemplateColumns={{
          base: '1fr',
          sm: '1fr 1fr',
          lg: '1fr 1fr 1fr',
        }}
        gap={'4'}>
          {
            state?.isLoading ? Array.from(Array(10).keys())?.map(item => <MealSkeletonCard key={item}/>) : null
          }
          {
            state?.meals?.map((item) => (
              <GridItem key={item.idMeal}>
                <MealCard meal={item}/>
              </GridItem>
            ))
          }
        </Grid>
      </Box>
    </Container>
  )
}

export default SearchMeals