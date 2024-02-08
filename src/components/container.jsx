import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({ children }) => {
  return (
    <Box w={{
      base: '95%',
      sm: '90%',
      lg: '80%',
    }}
    mx={'auto'}>
      { children }
    </Box>
  )
}

export default Container