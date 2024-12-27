import { Box, Button, Center, Container, Divider, Flex, Heading, Input, InputGroup, InputRightElement, Link, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { PiPinterestLogo } from 'react-icons/pi'
import { Link as RouterLink } from 'react-router-dom'

const Footer = () => {
  const [isLargerThan860] = useMediaQuery('(min-width: 1090px)')
  return (<Box>
    <Box minH={'150px'} pt={5} pb={3} bg={'black'} display={'flex'} alignItems={'center'}>
        <Container maxW={'8xl'}>
            <Box display={'flex'} justifyContent={'space-between'} textAlign={!isLargerThan860 && 'center'} 
             flexDir={isLargerThan860? 'row': 'column'} gap={5}
            >
                <Box display={'flex'} gap={!isLargerThan860 ? 2 : 8} justifyContent={!isLargerThan860 ? 'center': 'space-between'} flexWrap={'wrap'}> 
                    <Link bg={'#1a1a1a'} w={!isLargerThan860 ? 'calc(50% - 0.5rem)' : 'max-content'} p={3} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} > Home </Link>
                    <Link bg={'#1a1a1a'} w={!isLargerThan860 ? 'calc(50% - 0.5rem)' : 'max-content'} p={3} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} > About Me </Link>
                    <Link bg={'#1a1a1a'} w={!isLargerThan860 ? 'calc(50% - 0.5rem)' : 'max-content'} p={3} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} > Portfolio </Link>
                    <Link bg={'#1a1a1a'} w={!isLargerThan860 ? 'calc(50% - 0.5rem)' : 'max-content'} p={3} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} > Contact </Link>
                </Box>
                <Box>
                    <Heading>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=michaelnana656@gmail.com" target='_blank'>michaelnana656@gmail.com</a>
                    </Heading>
                </Box>
            </Box>
        </Container>
    </Box>


   {/* <Box bg={'rgb(26 62 52)'} color={'white'} py={'20px'} >
    <Container maxW={'8xl'} bg={'rgb(26 62 52)'}>
        <Flex gap={2} py={4} justifyContent={'space-between'} flexDir={{base: 'column', sm:'row'}}>
            <Box gap={3} w={{base: 'full', sm: '50%'}}>
                <Text fontSize={20}>Get the latest leasing news</Text>
                <InputGroup borderBottom={'2px solid white'} display={{base: 'none', lg: 'flex'}} w={'90%'} >
                  <Input type='email' name='email' border={'none'} outline={'none'} _placeholder={{color: 'white'}} placeholder='Email address'/>
                  <InputRightElement w={'max-content'}>
                    <Button colorScheme='black' fontSize={'small'} h={'full'} color={'white'}>Subscribe</Button>
                  </InputRightElement>
                </InputGroup>
                <Flex gap={4} py={3}>
                    <Link as={RouterLink} to={''}><BsTwitter size={24} /></Link>
                    <Link as={RouterLink} to={''}><FaFacebook size={24} /></Link>
                    <Link as={RouterLink} to={''}><PiPinterestLogo size={24} /></Link>
                    <Link as={RouterLink} to={''}><BsYoutube size={24} /></Link>
                </Flex>
                <Text color={'gray'} fontSize={'small'}>©2024 Housing Solutions Hub. All rights reserved</Text>
            </Box>
            <Box w={{base: 'full', sm: '50%'}} pt={{base: 'unset', md: '4'}}>
                <Flex justifyContent={'space-between'}  w={'full'} wrap={'wrap'}>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Advertise with us
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink} to={'/contact_us'}
                     >
                        Contact us
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Legal
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Site map
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink}
                     >
                        Hospitality Hub
                    </Link>
                    <Link w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} textAlign={{sm: 'end', md: 'unset'}}
                     gap={3} pb={2} textTransform={'capitalize'} as={RouterLink} to={'/about_us'}
                     >
                        About us
                    </Link>
                </Flex>
            </Box>
        </Flex>
        <InputGroup display={{base: 'flex', lg: 'none'}} bg={'transparent'} pb={2} w={'100%'}>
            <Input bg={'transparent'} type='email' name='email' border={'none'} outline={'none'} _placeholder={{color: 'white'}} placeholder='Email address'/>
            <InputRightElement w={'max-content'}>
                <Button bg={'black'} fontSize={'small'} color={'white'}>Subscribe</Button>
            </InputRightElement>
        </InputGroup>
        <Divider bg={'gray'}></Divider>
        <Flex gap={4} wrap={'wrap'} color={'white'} textTransform={'capitalize'}>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Employment sourcing hub</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Attend a mentorship class</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Travel and work abroad</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Artisians/Skills hiring hub</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>I.T students internship</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>Real estate companies</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                    <Divider orientation='vertical' w={'1px'} bg={'white'} color={'red'}/>
                </Center>
            </Flex>
            <Flex gap={2} alignItems={'center'} fontSize={'small'} pt={3} justifyContent={'center'}>
                <Link>online brokering</Link>
            </Flex>
        </Flex>
    </Container>
    </Box> */}
  </Box>)
}

export default Footer