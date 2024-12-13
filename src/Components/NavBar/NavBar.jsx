import { Box, Button, Container, Divider, Flex, Heading, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, OrderedList, Text, Tooltip, Link, UnorderedList, useDisclosure, useMediaQuery, VStack, Image, Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsHammer, BsHouse } from 'react-icons/bs'
import { CgToggleSquare } from 'react-icons/cg'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { IoMenu, IoMenuSharp } from 'react-icons/io5'
import { GiCancel } from 'react-icons/gi'
import { auth } from '../../FireBase/FireBase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FaCircleUser } from 'react-icons/fa6'
import { BiStar } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth)
  const [showNav, setShowNav] = useState(false)
  const [activeDropdown, setactiveDropdown] = useState(false)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [isLargerThan769] = useMediaQuery('(min-width: 769px)')
  // const [isLargerThan800] = useMediaQuery('(min-width: 1349px)')
  // const {handleLogout, isLoggingOut} = useLogout()
  const {pathname} = useLocation()
  useEffect(() => {
    setShowNav(false)
  }, [pathname])
  useEffect(() => {
    if(showNav) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }
  }, [showNav])

  return (<>
    <Box minW={'100vw'}>
      <Container maxW={'8xl'}>
        <Flex pt={2} alignItems={'center'} color={'white'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'} gap={1} >
           <Box display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} bg={'white'}>
            <BiStar size={30} color='black'/>
           </Box>
           <Heading className='main-text-color'>MN</Heading>
          </Box>
            <UnorderedList bg={'rgba(100,100,100, 0.5)'} borderRadius={'15px / 50px'} p={2} listStyleType={'none'} display={{base: 'none', md: 'flex'}} gap={3} alignItems={'center'} >
              <ListItem class="nav-item" px={3} gap={2} display={'flex'} alignItems={'center'} >
                <Link as={RouterLink} to={'/'} aria-current="page" href="index.html">Home</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                  <Divider orientation='vertical' w={'1px'} bg={'red'} color={'red'}/>
                </Center>
              </ListItem>
              <ListItem class="nav-item" px={3} gap={2} display={'flex'} alignItems={'center'} >
                <Link as={RouterLink} to={'/me'}>About</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                  <Divider orientation='vertical' w={'1px'} bg={'red'} color={'red'}/>
                </Center>
              </ListItem>
              {/* <ListItem class="nav-item" px={3} gap={2} display={'flex'} alignItems={'center'} >
                <a>Services</a>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                  <Divider orientation='vertical' w={'1px'} bg={'red'} color={'red'}/>
                </Center>
              </ListItem> */}
              <ListItem class="nav-item" px={3} gap={2} display={'flex'} alignItems={'center'} >
                <Link as={RouterLink} to={'/contact'} >Contact</Link>
                <Center display={{base: 'none', sm: 'flex'}} h={'80%'}>
                  <Divider orientation='vertical' w={'1px'} bg={'red'} color={'red'}/>
                </Center>
              </ListItem>
            </UnorderedList>

          <Box display={'flex'} gap={1} alignItems={'center'}> 
            <Box cursor={'pointer'} display={{base: 'block', md: 'none'}} onClick={() => setShowNav(true)}>
              <IoMenu size={'40'} className='menu-rotate'/>
            </Box>
            <Box bg={'white'} p={2} color={'black'} borderRadius={'15px / 50px'}>
              <Link as={RouterLink} to={'/contact'}>Book a call</Link>
            </Box>
          </Box>
        </Flex>
      </Container>

      
    </Box>
    {showNav && !isLargerThan769 ?(
        <Box position={'fixed'} bg={'black'} width={'full'} m={0} zIndex={'1000'} top={0} left={0} minH={'100vh'} maxH={'100vh'}>
          <Box p={3}>

            {/* heading */}

            <Box display={'flex'} justifyContent={'space-between'}>
              <Box display={'flex'} alignItems={'center'} gap={1}>
                <Box display={'flex'} gap={1} justifyContent={'center'} alignItems={'center'} p={2} bg={'white'}>
                 <BiStar size={30} color='black'/>
                </Box>
                <Heading className='main-text-color' as={RouterLink} to={'/'}>MN</Heading>
              </Box>
              <Box display={'flex'} alignItems={'center'} cursor={'pointer'} onClick={() => setShowNav(false)}>
                <MdCancel size={30} color='white' />
              </Box>
            </Box>
            
            {/* content */}
            <Box>
              <Box textAlign={'center'} pt={'50px'} display={'flex'} flexDir={'column'} gap={8}>
                <Heading as={RouterLink} to={'/me'}>About</Heading>
                <Heading as={RouterLink} to={'/contact'}>Contact</Heading>
                <Heading as={RouterLink} to={'/me'}>Services</Heading>
              </Box>
            </Box>
          </Box>
        </Box>
      ): null}
  </>)

}

export default NavBar