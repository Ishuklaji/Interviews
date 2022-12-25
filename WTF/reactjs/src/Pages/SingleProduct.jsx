import React  from 'react'
import { useParams } from 'react-router-dom'
import {
  Grid, GridItem, Skeleton, Stack, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text, Input, Select,
  Container, Box, Image,
  Center, VStack, Heading,
  Flex, Square, Spacer
} from '@chakra-ui/react'

const SingleProduct = () => {
  let {id } = useParams()
  console.log(id)
  
  let gym = JSON.parse(localStorage.getItem("gymdetails")) || []
   
  let curr = gym[id]

  console.log(curr)

  return (
    <Box>
      <Image src={curr.cover_image}/>
      <Text>{curr.gym_name}</Text>
      <Text>{curr.address1} {curr.address2} {curr.city} {curr.state} {curr.country} {curr.pin}</Text>
      <Text>{curr.description}</Text>
      <Text>Plan Name : {curr.plan_name || curr.category_name} </Text>

    </Box>
  )
}

export default SingleProduct