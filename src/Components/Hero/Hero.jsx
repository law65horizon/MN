import { AlertIcon, AspectRatio, Avatar, Box, Button, Container, Divider, Flex, Heading, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, Text, useDisclosure, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Hero = ({backgroundImage, heading, text, button}) => {
  // console.log(backgroundImage)
  return (<>
    <Box 
      display={'flex'}
      position={'relative'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={{sm: 'flex-start', lg:'end'}}
      // textAlign={'center'}
      verticalAlign={'baseline'}
      minH={{base: '240px', lg: '300px'}}
      zIndex={1}
      // borderRadius={'4px'}
    >
      <Box display={'flex'} w={'full'} h={'80vh'} alignItems={'center'} justifyContent={'center'}>
        <Box className='hero' zIndex={0} backgroundImage={`url('${backgroundImage}')`}>

          <Box mt={'100px'} color={'white'} position={'relative'} zIndex={0}>
            <Container maxW={'8xl'}>
              <VStack maxW={'500px'} gap={5}>
                <Heading> {heading} </Heading>
                <Text> {text} </Text>
                {button && (
                  <Box w={'full'}>
                    <Button bg={'white'} color={'black'} textTransform={'capitalize'} as={RouterLink} to={button?.link}> {button?.text} </Button>
                  </Box>
                )}
              </VStack>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  </>)
}

export default Hero