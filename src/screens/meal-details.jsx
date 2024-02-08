import { Box, Divider, Flex, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/container'

const MealDetails = () => {
  const [mealData, setMealData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const params = useParams()
  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
    .then((res) => setMealData(res.data.meals[0]))
    .finally(() =>  setIsLoading(false))
  }, [params.idMeal])
  console.log(mealData)
  return (
    <Container>
      <>
        <Box w={'full'} minH={'100px'} border={'1px'} borderColor={useColorModeValue('gray.300', 'gray.600')} backgroundColor={useColorModeValue('gray.200', 'gray.700')} rounded={'lg'} display={'flex'} p={4} alignItems={'center'} justifyContent={'center'} my={5}>
          <Text fontSize={'24px'}>Deteils of meal: <span style={{color: 'orange'}}>{mealData?.strMeal}</span></Text>
        </Box>

        <Box p={3} border={'1px'} borderColor={useColorModeValue('gray.300', 'gray.600')} backgroundColor={useColorModeValue('gray.200', 'gray.700')} rounded={'lg'}>
          <Box as={'iframe'} src={`https://www.youtube.com/embed/${mealData?.strYoutube?.split('=')[1]}`} w={'full'} minH={'400px'}  rounded={'lg'} allowFullScreen></Box>
        </Box>

        <Box p={3} border={'1px'} borderColor={useColorModeValue('gray.300', 'gray.600')} backgroundColor={useColorModeValue('gray.200', 'gray.700')} rounded={'lg'} my={5}>
          <Flex flexDir={{
            base: 'column',
            xl: 'row',
          }} gap={6} alignItems={'center'}>
            <Image src={mealData?.strMealThumb} height={{
              base: 'auto',
              md: '300px'
            }} rounded={'lg'} minW={{
              base: 'full',
              sm: '350px',
            }} maxW={'350px'} w={{
              base: '100%',
              lg: '350px',
            }} objectFit={'cover'}/>
            <Box px={6} w={'full'} >
              <Text textAlign={'center'} fontSize={'24px'} mb={2}>Necessary products</Text>
              <Flex flexDir={{
                base: 'column',
                md: 'row'
              }} alignItems={{
                base: 'center',
                md: 'start',
              }} justifyContent={'space-evenly'} gap={6}>
                <Stack>
                  <Text>{mealData?.strIngredient1}  <span>{mealData?.strMeasure1}</span></Text>
                  <Text>{mealData?.strIngredient2}  <span>{mealData?.strMeasure2}</span></Text>
                  <Text>{mealData?.strIngredient3}  <span>{mealData?.strMeasure3}</span></Text>
                  <Text>{mealData?.strIngredient4}  <span>{mealData?.strMeasure4}</span></Text>
                  <Text>{mealData?.strIngredient5}  <span>{mealData?.strMeasure5}</span></Text>
                  <Text>{mealData?.strIngredient6}  <span>{mealData?.strMeasure6}</span></Text>
                  <Text>{mealData?.strIngredient7}  <span>{mealData?.strMeasure7}</span></Text>
                  <Text>{mealData?.strIngredient8}  <span>{mealData?.strMeasure8}</span></Text>
                  <Text>{mealData?.strIngredient9}  <span>{mealData?.strMeasure9}</span></Text>
                  <Text>{mealData?.strIngredient10}  <span>{mealData?.strMeasure10}</span></Text>
                </Stack>
                <Stack>
                  <Text>{mealData?.strIngredient11}  <span>{mealData?.strMeasure11}</span></Text>
                  <Text>{mealData?.strIngredient12}  <span>{mealData?.strMeasure12}</span></Text>
                  <Text>{mealData?.strIngredient13}  <span>{mealData?.strMeasure13}</span></Text>
                  <Text>{mealData?.strIngredient14}  <span>{mealData?.strMeasure14}</span></Text>
                  <Text>{mealData?.strIngredient15}  <span>{mealData?.strMeasure15}</span></Text>
                  <Text>{mealData?.strIngredient16}  <span>{mealData?.strMeasure16}</span></Text>
                  <Text>{mealData?.strIngredient17}  <span>{mealData?.strMeasure17}</span></Text>
                  <Text>{mealData?.strIngredient18}  <span>{mealData?.strMeasure18}</span></Text>
                  <Text>{mealData?.strIngredient19}  <span>{mealData?.strMeasure19}</span></Text>
                  <Text>{mealData?.strIngredient20}  <span>{mealData?.strMeasure20}</span></Text>
                </Stack>
              </Flex>
            </Box>
          </Flex>
          <Divider mt={3}/>
          <Box my={3}>
            {mealData?.strInstructions}
          </Box>
        </Box>
      </>
    </Container>
  )
}

export default MealDetails