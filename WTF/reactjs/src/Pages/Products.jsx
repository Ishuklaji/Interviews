import React, { useState, useEffect } from 'react'
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

const Products = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`)
      .then((res) => res.json())
      .then((res) => setProducts(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    <Stack>
      <Skeleton height='40px' />
      <Skeleton height='40px' />
      <Skeleton height='40px' />
      <Skeleton height='40px' />
      <Skeleton height='40px' />
      <Skeleton height='40px' />
      <Skeleton height='40px' />
      <Skeleton height='40px' />
      <Skeleton height='40px' />
    </Stack>
  }

  if (error) {
    return (

      <Container mt={8}>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Something went wrong!...</AlertTitle>
          <AlertDescription>Please Refresh the page.</AlertDescription>
        </Alert>
      </Container>
    )
  }
  console.log(products)
  return (
    <Container maxW={{
      base: 'full',
      md: 'container.xl',
      xl: "container.2xl"
    }}
      mt={{ base: 8, md: 16, xl: 20 }}
      gap="20px"
      bg="black">
       
      <Container maxW={{
        base: 'full',
        md: 'container.xl',
        xl: "container.2xl"
      }}
        mt={{ base: 8, md: 16, xl: 20 }}
        display="flex"
        gap="20px"
        position="relative"
        bg="black"
      >
        <Box color="white" w="20%" position="fixed" height="80vh">
          <Heading>Filter </Heading>
          <br />
          <Text>Location</Text>
          <Input placeholder="Enter Location" />
          <br />
          <br />
          <Text>Price</Text>
          <Flex>
            <Input placeholder="min" />
            <Input placeholder="max" />
          </Flex>
          <br />
          <Text>Cities</Text>
          <Select >
            <option>New Delhi</option>
            <option>Ghaziabad</option>
            <option>Noida</option>
            <option>Delhi</option>
          </Select>
        </Box>

        <Grid templateColumns={{
          base: 'repeat(1, 1fr)',
          // md: 'repeat(2, 1fr)',
          // xl: 'repeat(3, 1fr)'
        }} gap={6} w="75%" marginLeft="25%">
          {products.map((product) => (
            <GridItem w='100%'  >
              <Box bg="gray.900" boxShadow="xl" >
                <Flex gap="20px">
                  <Square size='300px'>
                    <Image src={product.cover_image}
                      align="center"
                      width="100%"
                      height="300px"
                    />
                  </Square>

                  <VStack fontStyle="bold" color="white" spacing={2}>
                    <Text>{product.gym_name}</Text>
                    <Text>Rating : {product.rating}</Text>
                    <Text>{product.address1} {product.address2} {product.city}</Text>
                  </VStack>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Container>
  )
}

export default Products