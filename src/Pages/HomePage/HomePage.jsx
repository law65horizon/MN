import { Box, Card, Flex, Heading,Text, Image, VStack, Input, AlertIcon, Container, Link, CardBody, AspectRatio, Stack, Skeleton, Divider, CardHeader, Button, useMediaQuery, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Hero from '../../Components/Hero/Hero'
import { BiDesktop, BiMobile, BiSearch } from 'react-icons/bi'
import { FaPen, FaPenToSquare, FaRegStar } from 'react-icons/fa6'
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from 'react-icons/bs'
import CTA from '../../Components/CTA/CTA'
import SectionTag from '../../Components/SUB/SectionTag'
import PorfolioModal from '../../Components/Modals/PorfolioModal'
import { IoFlashOutline } from 'react-icons/io5'

const HomePage = () => {
  const [isLargerThan860] = useMediaQuery('(min-width: 860px)')
  const {isOpen, onClose, onOpen} = useDisclosure()
  const hero_text = `Welcome to my web design portfolio! I specialize in creating beautiful and functional websites that help businesses grow.
   Whether you need a simple landing page or a complex e-commerce site, I have the skills and expertise to bring your vision to life. 
   I work closely with my clients to understand their unique needs and goals, and I’m committed to delivering high-quality work on time 
   and within budget`
  const portfolio = [
    {
      img_scr: '/12.PNG',
      full_img_src: '/13.WEBP',
      text: 'housing solutions hub',
      link: '/me/#experiences'
    },
    {
      img_scr: '/13.WEBP',
      full_img_src: '/13.WEBP',
      text: 'michael\'s agency',
      link: '/me/#experiences'
    },
    {
      img_scr: '/11.PNG',
      full_img_src:'/11.PNG',
      text: 'flora',
      link: '/me/#experiences'
    },
  ]
  const design = [
    {
      icon: <FaPenToSquare size={24} />,
      heading: 'UX & UI',
      text: `Design interfaces that are intuitive, efficient, and enjoyable to use.`
    },
    {
      icon: <BiMobile size={24} />,
      heading: 'web app',
      text: `Transforming ideas into exceptional web app experiences`
    },
    {
      icon: <BiDesktop size={24} />,
      heading: 'design & creative',
      text: `Crafting visually stunning desings that connect with your audience.`
    },
    {
      icon: <IoFlashOutline size={24} />,
      heading: 'development',
      text: `Bringing your vision to life with the latest technology and design trends`
    },
  ]
  return (
    <Box>
      <Hero backgroundImage={'/home-hero-bg.webp'} heading={'Create Amazing Business Websites'} text={hero_text} button={{text: 'get started', link: '/contact'}}/>

      <Box px={2} py={8}>
        <Heading textAlign={'center'} textTransform={'capitalize'}>How I can help you</Heading>
        <Text textAlign={'center'}>Whether you’re looking to create a new website from scratch or revamp an existing one, I’m here to help.</Text>
        <Container maxW={'8xl'} display={'flex'} pt={8} gap={2} flexWrap={'wrap'} justifyContent={'space-between'}>
        {design.map((ele, index) => (
          <VStack key={index} w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(25% - 0.5rem)'}} gap={3} minH={{base: '200px', md: '300px'}} 
          px={4} pb={4} display={'flex'} flexDir={'column'} justifyContent={'flex-end'} bg={'#1a1a1a'} 
          boxShadow={'0 4px 10px rgba(0,0,0,0.5)'}>
            <Box w={'full'}>
              {ele.icon}
            </Box>
            <Heading w={'full'} fontSize={26} textTransform={'capitalize'}> {ele.heading} </Heading>
            <Text>{ele.text}</Text>
          </VStack>
        ))}
        </Container>
      </Box>

      {/* portfolio */}
      <Box py={8}>
        <Box w={'full'} display={'flex'} justifyContent={'center'}>
          <SectionTag message={'Portfolio'} position={'center'} />
        </Box>
        <Heading textAlign={'center'}>Latest Works</Heading>
        <Container maxW={'8xl'} display={'flex'} pt={8} gap={2} flexWrap={'nowrap'} justifyContent={'space-between'} overflowX={'scroll'}
         scrollSnapType={'x mandatory'} scrollBehavior={'smooth'} scrollPadding={'0.25rem'} style={{scrollbarWidth: 'none'}}  
         whiteSpace={'nowrap'}
        >
          {portfolio.map((ele, index) => (<>
            <PorfolioModal items={ele} index={index}/>
          </>))}
        </Container>
        
        <Box w={'full'} as={RouterLink} display={'flex'} pt={5} gap={4} justifyContent={'center'}>
          <Text color={'gray'}>Check out more</Text>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <BsArrowRight  size={24}/>
            <Text>View More</Text>
          </Box>
        </Box>
      </Box>

      <CTA />


      

      <Box textAlign={!isLargerThan860 ? 'unset' : 'center'} py={8} bg={'#1a1a1a'} display={'flex'} alignItems={'center'} justifyContent={'center'} minH={'300px'}
       flexDir={'column'} gap={4} px={2}
      >
        <Heading>Got a Vision? Let's Bring it to Life!</Heading>
        <Text textTransform={'capitalize'}> Your Next Big Idea Deserves the Best Execution, let's turn your vision into reality </Text>
        {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text> */}
        <Box pt={3}>
          <Button bg={'white'} color={'black'} p={3} fontSize={'20px'} textDecor={'underline'} rightIcon={<BsArrowUpRight size={20}/>}>Get in Touch</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage



