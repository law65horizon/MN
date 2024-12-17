import { Box, Button, Container, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'

const CTA = () => {
  return (

    <Box display={'flex'} pb={'6'} w={'full'} h={'500px'} alignItems={'center'} justifyContent={'center'}>
        <Box className='hero' zIndex={0} backgroundImage={`url('/home-hero-bg.webp')`}>

          <Box color={'white'} height={'full'} display={'flex'} alignItems={'center'} position={'relative'} zIndex={0}>
            <Container maxW={'8xl'}>
              <VStack w={'full'} gap={2} alignItems={'center'}>
                <Text> (Book a free consultation now) </Text>
                <Heading textTransform={'capitalize'}>exclusive winter deal days get a free consulutation</Heading>
                <Text>
                  Ready to take your website to the next level? Let’s chat! Whether you have a clear vision or need guidance, 
                  I’m here to help bring your ideas to life.
                </Text>
                <Box >
                  <Button bg={'white'} color={'black'} p={3} fontSize={'20px'} textDecor={'underline'} rightIcon={<BsArrowUpRight size={20}/>} as={RouterLink} to={'/contact'}>Let's Talk</Button>
                </Box>
              </VStack>
            </Container>
          </Box>
        </Box>
    </Box>
  )
}

export default CTA