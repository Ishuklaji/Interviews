import { Box ,Heading ,Button , Container} from '@chakra-ui/react'
import React , { useState, useContext } from 'react'
import { AuthContext } from "../Context/AuthContext"

const Home = () => {
  const {handleLogout} = useContext(AuthContext)

  return (
    <Container> 
      <Heading>Home Page</Heading>
      <Button onClick = {handleLogout} >LogOut</Button>
    </Container>
  )
}

export default Home