import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const links = [
    {
        path: "/",
        title: "Fitness"
    },
    {
        path: "/products",
        title: "Gyms"
    },
    {
        path: "/contact",
        title: "Become WTF Partner"
    },
    {
        path: "/about",
        title: "About Us"
    },
    {
        path: "/login",
        title: "LogIn"
    }
    
]

const Navbar = () => {
    return (
        <Flex  minWidth='max-content' alignItems='center' gap='2' bg="gray.900" p={2}>
            <Box p='2' color="white">
                <Heading size='md'>
                    <Link to={"/"} >WTF</Link>
                    </Heading>
            </Box>
            <Spacer />
            <Box p='2' color="white">
                {
                    links.map((link) => (
                        <Box as='span' m={1} key={link.path}>
                            <Link to={link.path}>{link.title}</Link>
                        </Box>
                    ))
                }
            </Box>
        </Flex>
    )
}

export default Navbar