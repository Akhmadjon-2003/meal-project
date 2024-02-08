import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'

const MealSkeletonCard = () => {
  return (
    <Box pos={'relative'} h={300}>
      <Skeleton rounded={'lg'} pos={'absolute'} h={'full'} w={'full'}/>
      <Skeleton pos={'absolute'} right={'10px'} left={'10px'} bottom={'10px'} h={'50px'} rounded={'lg'}/>
      <Skeleton pos={'absolute'} right={'10px'} top={'10px'}  h={'40px'} w={'48px'} rounded={'lg'}/>
    </Box>
  )
}

export default MealSkeletonCard