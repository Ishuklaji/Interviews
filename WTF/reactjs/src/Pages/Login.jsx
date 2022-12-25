import { Button, Container, FormControl, FormHelperText, FormLabel, Input, Stack } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"
const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '' })

  const { handleLogin, handleLogout, isAuth } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserDetails({ ...userDetails, [name]: value })
  }

  const handleClick = () => {
    setLoading(true)
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(userDetails),
      header: { "Content-Type": "application/json" }
    })
      .then(() => handleLogin())
      .catch(() => handleLogout())
      .finally(() => setLoading(false))
  }

  if (isAuth) {
    return <Navigate to="/" />
  }
  const { email, password } = userDetails
  return (
    <Container bg="gray" >
      <Stack>
        <FormControl maxW={600} p={2} spacing={6} color="white">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type='email' bg="white" value={email} onChange={handleChange} placeholder="Email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl maxW={600} p={2} spacing={6} color="white">
          <FormLabel>Password</FormLabel>
          <Input name="password" type='text' bg="white" value={password} onChange={handleChange} placeholder='Enter your password' />
        </FormControl>

        <FormControl maxW={600} p={2} spacing={6}>
          <Button onClick={handleClick}>Login</Button>
        </FormControl>
      </Stack>
    </Container>
  )
}

export default Login