import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const PageLayout = ({children}) => {
  const {pathname} = useLocation()
  const [isLargerThan800] = useMediaQuery('(min-width: 727px)')
  return (<>
    {/* <header style={{position: 'fixed',left: 0, width: '100%', top: '0',zIndex: 1000, backgroundColor: 'white'}} >
      <NavBar />
    </header>
    <main>
      <Flex h={'100vh'} flexDir={'column'} mt={'56px'}>
         <Box> {children} </Box>
      </Flex>
    </main> */}

    <header style={{position: 'fixed',left: 0, width: '98%', top: '20px',zIndex: 1000,}} >
    {/* <header style={{position: 'absolute',left: 0, width: '98%', top: '20px',zIndex: 1000,}} > */}
      <NavBar />
    </header>

    {/* <Box className='hero' position={'absolute'} zIndex={0}></Box> */}

    
    <Flex minH={'100vh'} background={'#161616'} flexDir={'column'}>
      <main style={{flex: '1'}}>
         <Box h={'full'} background={'black'}> {children} </Box>
      </main>
      <footer >
        <Footer />
      </footer>
    </Flex>
  </>)
}

export default PageLayout