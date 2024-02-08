import { Box, Grid, GridItem, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import BasketMealCard from '../components/basket-meals-card'
import Container from '../components/container'
import { StoreContext } from '../store/store'

const Basket = () => {
  const { state } = useContext(StoreContext)
  return (
    <Container>
      <>
        <Box minH={'100px'} w={'full'} bg={useColorModeValue('gray.200', 'gray.700')} rounded={'lg'} my={'5'} textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'3'} border={'1px'} borderColor={useColorModeValue('gray.300', 'gray.600')}>
          <Heading fontSize={'24px'}>All meals in basket</Heading>
        </Box>
      </>
      {
        state?.basket?.length === 0 && (
          <Image mx={'auto'} src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png'/>
        )
      }
      <Grid my={4} gridTemplateColumns={{
        base: '1fr',
        sm: '1fr 1fr',
        lg: '1fr 1fr 1fr',
      }}
      gap={'4'}>
        {
          state?.basket?.map(item => (
            <GridItem key={item.idMeal}>
              <BasketMealCard meal={item}/>
            </GridItem>
          ))
        }
      </Grid>
    </Container>
  )
}

export default Basket