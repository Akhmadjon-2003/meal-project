import { Badge, Box, Button, Flex, Heading, HStack, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaMoon, FaShoppingBasket, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { StoreContext } from '../store/store'

const Navbar = () => {
  const { colorMode, setColorMode} = useColorMode()
  const { state } = useContext(StoreContext)
  return (
    <Box w={'full'} py={'15px'} bg={useColorModeValue('gray.200', 'gray.700')} borderBottom={'1px'} borderBottomColor={useColorModeValue('gray.300', 'gray.600')} pos={'sticky'} top={'0'} zIndex={'999'}>
      <Flex
        w={{
          base: '95%',
          sm: '90%',
          lg: '80%',
        }}
        mx={'auto'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Link to={'/'}>
          <Heading>Meals</Heading>
        </Link>
        <HStack>
          <Button onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')} colorScheme='orange' variant={'outline'}>
            <Icon as={colorMode === 'dark' ? FaSun : FaMoon}/>
          </Button>
          <Link to={'/basket'}>
            <Button pos={'relative'} colorScheme='orange'>
            <Badge pos={'absolute'} bg={'green'} py={'1px'} top={'-3px'} right={'-3px'} color={'white'}>{ state?.basket?.length}</Badge>
            <Icon as={FaShoppingBasket}/>
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar