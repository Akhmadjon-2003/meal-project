import { Box, Heading, Input, useColorModeValue } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'
import Categories from '../components/categories'
import Container from '../components/container'

const Home = () => {
  return (
    <Box my={'5'}>
      <Container>
        <>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'300px'} w={'full'} bgImage={useColorModeValue('https://t3.ftcdn.net/jpg/03/36/70/52/360_F_336705231_zQvPTsKvOxYoxJx1YuD1Zfx9eprt0XTp.jpg', 'https://i.pinimg.com/736x/11/d4/8f/11d48f847df7a89c9f58480f32425940.jpg')} bgPos={'center'} bgSize={'cover'} rounded='lg' flexDir={'column'} shadow={'md'}>
            <Heading display={'flex'} gap={'2'} textAlign={'center'} mb={'4'}>Fresh And Organic Products For You</Heading>
            <Box mt={'3'} bg={useColorModeValue('white', 'gray.900')} rounded={'md'} w={{
              base: '90%',
              md: '500px',
            }}>
              <form action="/meals">
                <Input name='s' placeholder='Enter favorite meal...' w={'full'} colorScheme={'orange'} variant={'outline'} textColor={useColorModeValue('gray.900', 'gray.200')}/>
              </form>
            </Box>
          </Box>
          <Categories/>
        </>
      </Container>
    </Box>
  )
}

export default Home