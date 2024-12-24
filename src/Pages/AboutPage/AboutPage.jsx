import { AspectRatio, Box, Button, Container, Divider, Heading, Image, Link, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsArrowUpRight, BsBootstrap } from 'react-icons/bs'
import { GiDeliveryDrone, GiStarShuriken } from 'react-icons/gi'
import { DiHtml5, DiReact } from 'react-icons/di'
import SectionTag from '../../Components/SUB/SectionTag'
import { FaFire, FaPenToSquare, FaResearchgate } from 'react-icons/fa6'
import { GrDeploy } from 'react-icons/gr'
import { CiSettings } from 'react-icons/ci'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import Hero from '../../Components/Hero/Hero'
import { IoFlashOutline } from 'react-icons/io5'
import { Link as RouterLink } from 'react-router-dom'
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiBootstrap, SiChakraui, SiJquery, SiTailwindcss } from 'react-icons/si'
import ShowImage from './ShowImage'
const AboutPage = () => {
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  const dev_approach = [
    {
      approach: 'research',
      icon: <FaResearchgate size={24} />,
      message: `I can create a beautiful and functional website that reflects your brand and engages your audience.`
    },
    {
      approach: 'design',
      icon: <FaPenToSquare size={24} />,
      message: `I can create a beautiful and functional website that reflects your brand and engages your audience.`
    },
    {
      approach: 'development',
      icon: <IoFlashOutline size={24} />,
      message: `I can create a beautiful and functional website that reflects your brand and engages your audience.`
    },
    {
      approach: 'testing',
      icon: <CiSettings size={24} />,
      message: `I can create a beautiful and functional website that reflects your brand and engages your audience.`
    },
    {
      approach: 'deploy',
      icon: <GrDeploy size={24} />,
      message: `I can create a beautiful and functional website that reflects your brand and engages your audience.`
    },
    {
      approach: 'deliver',
      icon: <GiDeliveryDrone size={24} />,
      message: `I can create a beautiful and functional website that reflects your brand and engages your audience.`
    }
  ]
  const hero_text = `Every great website starts with a story—yours. As a full-stack developer,
   I combine creativity and technical expertise to design and build custom websites that reflect your unique vision. 
   Let’s make your online presence unforgettable.
  `
  const explore_design_text = `With over 3 years of experience in web development, I’ve worked on diverse projects ranging from e-commerce 
  platforms and SaaS applications to portfolio sites and blogs. I started my journey as a self-taught developer, driven by curiosity and 
  creativity, and have since worked with clients from various industries. Each project has strengthened my understanding of best practices 
  and provided fresh insights into the latest development trends.`
  const design_approach_text = `My approach to web development is rooted in collaboration and flexibility. I believe in understanding a 
    client’s vision fully before diving into the project. My process includes initial research, wireframing, design, development, testing, 
    and finally, deployment. Throughout each step, I maintain open communication, providing regular updates to ensure the project aligns with
    your vision and objectives.`
  const client_focus_text = `Whether you're in real estate, retail, or any field, I approach every project with a deep commitment to 
    understanding your specific needs. I strive to create solutions that not only look great but drive business results, focusing on 
    usability, performance, and scalability. My goal is to make the process smooth, efficient, and rewarding for every client.`
  

  const experiences = [
    {
      project_name: 'housing solutions hub',
      period: 'August 2024 - November 2024',
      role: 'Full Stack Developer',
      desc: `This application provides a seamless experience for managing real estate properties, connecting potential buyers, sellers, and agents. Built with a focus on user-friendly design and efficient functionality, the platform streamlines property listings, search, and contact management for a better user experience.`,
      technologies: [
        [<RiJavascriptFill color='yellow' size={24}/>, 'JavaScript'], 
        [<DiReact size={24} color='#3182CE' />, 'React'],
        [<FaFire size={24} color='yellow' />, 'Firebase'],
        [<DiHtml5 size={24} color='yellow' />, 'HTML'],
        [<SiChakraui size={24} color='rgb(46 145 165)'/>, 'Chakra UI'],
      ],
      link: 'https://housing-henna.vercel.app/',
      features: [
        ['Property Listings:', `A dynamic interface to add, edit, and showcase properties with detailed descriptions, images, and pricing.`],
        ['Advanced Search & Filter:', `Enables users to search properties by location, price range, property type, and other criteria.`],
        ['User Authentication:', 'Secure login and registration functionality for agents, buyers, and sellers.'],
        ['Contact Management:', ' Features a messaging system or contact form to connect buyers and sellers directly.']
      ]
    },
    {
      project_name: 'insider',
      period: 'Feb 2024 - April 2024',
      role: 'Full Stack Developer',
      desc: 'A dynamic and customizable blog platform designed for content creators to share ideas, engage with readers, and manage posts effortlessly. The platform combines a clean, intuitive interface with powerful backend functionality to deliver a seamless blogging experience.',
      technologies: [
        [<RiJavascriptFill color='yellow' size={24}/>, 'JavaScript'], 
        [<DiReact size={24} color='#3182CE' />, 'React'],
        [<FaFire size={24} color='yellow' />, 'Firebase'],
        [<SiChakraui size={24} color='rgb(46 145 165)'/>, 'Chakra UI'],
      ],
      link: 'https://insider-alpha.vercel.app/',
      features: [
        ['Content Management:', `Easy-to-use tools for creating, editing, and deleting blog posts with rich text formatting.`],
        ['Responsive Design:', `Fully responsive layout ensuring an optimal experience across devices.`],
        ['User Authentication:', 'Secure login and registration functionality for agents, buyers, and sellers.'],
        ['Search & Categories:', 'Allows readers to find posts quickly using search functionality and category filters.']
      ]
    },
    {
      project_name: 'ESG',
      period: 'Sept 2023 - Late Sept 2023',
      role: 'Front-end Developer',
      desc: 'ESG is a landing page designed with a user-friendly interface to help investors navigate the complexities of ESG in capital markets with ease. Key features include:',
      technologies: [
        [<RiJavascriptFill color='yellow' size={24}/>, 'JavaScript'], 
        [<DiHtml5 size={24} color='yellow' />, 'HTML'],
        [<SiBootstrap size={24} color='purple'/>, 'Bootstrap'],
      ],
      item: {
        full_img_src: '/flora.webp'
      },
      features: [
        ['Intuitive Dashboard:', 'A clean, customizable dashboard that provides an at-a-glance overview of your ESG-focused investments, key metrics, and market trends.'],
        ['Mobile-Responsive Design:', `Fully responsive layout ensuring an optimal experience across devices.`],
        ['Personalized Insights:', 'Receive tailored recommendations and insights based on your investment preferences and ESG goals.'],
      ]
    },
    {
      project_name: 'wood works',
      period: 'June 2023 - Late June 2023',
      role: 'Front-end Developer',
      desc: 'ESG is a landing page designed with a user-friendly interface to help investors navigate the complexities of ESG in capital markets with ease. Key features include:',
      technologies: [
        [<RiJavascriptFill color='yellow' size={24}/>, 'JavaScript'], 
        [<DiHtml5 size={24} color='yellow' />, 'HTML'],
        [<RiTailwindCssFill size={24} color='#3182CE'/>, 'Tailwind css'],
        [<SiJquery size={24} color='#3182CE'/>, 'Jquery'],
      ],
      item: {
        full_img_src: '/furniture.webp'
      },
      features: [
        ['Intuitive Dashboard:', 'A clean, customizable dashboard that provides an at-a-glance overview of your ESG-focused investments, key metrics, and market trends.'],
        ['Mobile-Responsive Design:', `Fully responsive layout ensuring an optimal experience across devices.`],
        ['Personalized Insights:', 'Receive tailored recommendations and insights based on your investment preferences and ESG goals.'],
      ]
    }
  ]
  // console.log(experiences)

 
  return (
    <Box> 
        <Hero backgroundImage={'/why-choose-us.webp'} heading={'Welcome to michaeldev.com'} text={hero_text} 
         button={{text: 'get started', link: '/contact'}}
        />
        <Box px={{base: 2, md: 9}} pt={8} pb={'40px'} display={'flex'} justifyContent={{base: 'center', xl: 'normal'}} gap={5} 
          flexDir={{base: 'column', xl: 'row'}}
        >
          {/* first and second column */}
            <Box display={'flex'} flexDir={{base: 'column', md: 'row'}} gap={3} width={'full'}>
                <Box width={{base: 'full', md: '55%'}} display={'flex'} flexDir={'column'} gap={2}>
                    <Heading pb={7}>About Me</Heading>
                    <Text>
                       I have been working in the web design industry for over 5 years, and I have experience working with clients from 
                       a wide range of industries. I am passionate about creating websites that are not only visually appealing but also
                        optimized for speed, security, and performance. I stay up-to-date with the latest web design trends and technologies
                         to ensure that my clients receive the best possible service.
                    </Text>
                    <Box bg={'gray'} h={"auto"} flexGrow={1} w={'full'} mt={3}></Box>
                </Box>
                <Box width={{base: 'full', md: '45%'}} bg={'#1a1a1a'} p={6} display={'flex'} flexDir={'column'} gap={3}>
                    <Box borderRadius={'50%'} width={'65px'} h={'65px'} bg={'gray'} display={'flex'} justifyContent={'center'} 
                     alignItems={'center'} borderTop={'black'}
                    >
                        <BiWorld size={50} />
                    </Box>
                    <Heading>120%</Heading>
                    <Text>
                    Hi! I’m Michael, a full-stack web developer with a passion for creating efficient, modern, and engaging websites. 
                    With expertise in both front-end and back-end development, I bring ideas to life with clean, intuitive design and 
                    seamless functionality.
                    </Text>
                    <AspectRatio maxW={'full'} ratio={3/3} maxH={'450px'}>
                      <Image
                        src='/Aae.webp'
                        loading='lazy'
                        objectFit={'cover'}
                        objectPosition={'center center'}
                      />
                    </AspectRatio>
                </Box>
            </Box>
          {/* third column */}
            <Box width={{base: 'full', xl: '45%'}} display={'flex'} flexDir={'column'} justifyContent={'space-between'} gap={30}>
              <Box width={{base: 'full'}} display={'flex'} justifyContent={'center'}>
                <Box w={'max-content'} position={'relative'} >
                  <Image src='/testimonial.jpg' w={'200px'} />
                  
                </Box>
              </Box>
              <Box display={'flex'} w={'full'} px={{base: 1, md: 3}} flexDir={'column'} pt={{base: 4, xl: '80px'}} gap={10}>
                <Box display={'flex'} w={'full'} gap={6}>
                  <Box w={'55px'} minW={'56px'} bg={'white'} h={'55px'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <GiStarShuriken color='black'/>
                  </Box>
                  <Box w={'full'}>
                    <Text>
                      What sets me apart as a developer is my ability to merge creativity with logic. Whether it’s crafting elegant user 
                      interfaces or tackling complex backend problems, I enjoy finding innovative solutions that bring ideas to life. Outside
                       of work, my love for design and technology inspires me to stay curious and constantly learn.
                    </Text>
                  </Box>
                </Box>

                <Box display={'flex'} w={'full'} gap={6}>
                  <Box w={'55px'} minW={'56px'} bg={'white'} h={'55px'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <GiStarShuriken color='black'/>
                  </Box>
                  <Box w={'full'}>
                    <Text>
                      Every project begins with a deep understanding of your goals. I prioritize collaboration, clear communication, and a
                       research-driven approach to ensure the final product aligns perfectly with your vision. My workflow emphasizes clean 
                       code, attention to detail, and timely delivery.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
        </Box>

        <Container maxW={'8xl'}>

         {/* Skills & specializations */}
         <Box py={8}>
          <Box pb={3} w={'full'} display={'flex'} justifyContent={'start'}>
            <SectionTag message={'Skills & Specializatons'} position={'start'} />
          </Box>

          <Box pt={3}>
            <Text className='paragraph'>
              Over the years, I’ve honed my skills in technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js. 
              I specialize in responsive design, ensuring that my websites are not only visually appealing but also optimized for performance
               across all devices. My experience spans from simple landing pages to complex web applications, always with an eye for user
                experience and accessibility.
            </Text>

            <Box pt={2}>
              <UnorderedList listStyleType={'none'} m={0} display={'flex'} gap={2} flexDir={'row'} flexWrap={'wrap'}>
                  <ListItem bg={'#1a1a1a'} w={'max-content'} p={3} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} 
                    alignItems={'center'} gap={1} justifyContent={'center'}
                  >
                    <DiHtml5 size={20} color='orange'/>
                    <Text> HTML</Text>
                  </ListItem>
                  <ListItem bg={'#1a1a1a'} w={'max-content'} p={3} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} 
                    alignItems={'center'} gap={1} justifyContent={'center'}
                  >
                    <DiReact size={20} color='blue'/>
                    <Text> React</Text>
                  </ListItem>
                  <ListItem bg={'#1a1a1a'} w={'max-content'} p={2} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} 
                    alignItems={'center'} gap={1} justifyContent={'center'}
                  >
                    <RiJavascriptFill color='yellow' size={24}/>
                    <Text> JavaScript</Text>
                  </ListItem>
                  <ListItem bg={'#1a1a1a'} w={'max-content'} p={3} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} 
                    alignItems={'center'} gap={1} justifyContent={'center'}
                  >
                    <DiHtml5 size={20}/>
                    <Text> UI/UX</Text>
                  </ListItem>
                </UnorderedList>
            </Box>
          </Box>

         </Box>

         {/* Experiences  */}
         <Box  py={8} id='experiences'>
          <SectionTag message={'Experiences'} position={'start'} />

          <Box pt={3} display={'flex'} justifyContent={'space-between'} flexDir={{base: 'column',}} gap={2}>
            <Heading textTransform={'capitalize'}>Explore my design journey</Heading>
            <Box  >
              <Text className='paragraph' > {explore_design_text} </Text>
              <Box display={'flex'} justifyContent={'flex-end'}>
              <Link display={'flex'} w={'max-content'} as={RouterLink} to={'/contact'} p={2} alignItems={'center'} justifyContent={'center'}
                mt={3} bg={'transparent'} gap={2} 
              >
                <Text>Book a call</Text>
                <BsArrowUpRight />
              </Link>
              </Box>
            </Box>
          </Box>
            
          {/* projects */}
          <Box py={2} display={'flex'} flexDir={'column'} gap={'10px'} pt={'50px'}>
           {experiences.map((ele, index) => {
            const [showDesignText, setShowDesignText] = useState(false)
            const [showMore, setShowMore] = useState(false)
            return (<>
             <Box display={'flex'} gap={3} flexDir={{base: 'column', md: 'row'}} justifyContent={'space-between'}>
              <Box>
                <Heading textTransform={'capitalize'}> {ele.project_name} </Heading>
                <Text > {ele.period} </Text>
              </Box>
              <Box>
                <Text> {ele.role} </Text>
              </Box>
              <Box w={{base:'full', md: '34.8%'}}>
                <UnorderedList listStyleType={'none'} display={'flex'} gap={2} flexDir={'row'} flexWrap={'wrap'}>
                  {ele.technologies.map((ele) => (
                   <ListItem>
                    <Text bg={'#1a1a1a'} color={'#D3D3D3'} w={'max-content'} p={2} borderLeftRadius={'10px'} borderRightRadius={'10px'} display={'flex'} 
                     alignItems={'center'} justifyContent={'center'} gap={1}
                    >  
                      {ele[0]}
                      {ele[1]}
                    </Text>
                   </ListItem>
                  ))}
                </UnorderedList>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  {ele.link ? (
                    <Link display={'flex'} w={'max-content'} p={2} alignItems={'center'} justifyContent={'center'} mt={3} 
                     bg={'transparent'} gap={2} as={RouterLink} to={ele.link} target='_blank'
                    >
                      <Text>View</Text>
                      <BsArrowUpRight />
                    </Link>
                  ) : (
                    <Box>
                      <ShowImage item={ele.item} />
                    </Box>
                  )}
                  <Box display={'flex'} alignItems={'center'} cursor={'pointer'} onClick={() => setShowDesignText(!showDesignText)} 
                   justifyContent={'center'}
                  >
                    {!showDesignText ? <GoTriangleDown size={35} /> : <GoTriangleUp size={35} /> }
                  </Box>
                </Box>
              </Box>
             </Box>
             {showDesignText && (<Box display={'flex'} gap={1} flexWrap={'wrap'}>
              <Text className='paragraph' >
                 {ele.desc}
                 <span style={{cursor: 'pointer', color: 'gray'}} onClick={() => setShowMore(true)}>   ..more</span>
              </Text>
              
             </Box>)}
             {showMore && (
              <Box>
                <Text fontWeight={'700'}>Key Features</Text>
                <UnorderedList px={3} gap={2}>
                  {ele?.features.map((ele) => (
                    <ListItem>
                      <b> {ele[0]} </b>
                      {ele[1]}
                    </ListItem>
                  ))}
                </UnorderedList>
                <Box display={'flex'} justifyContent={'end'}>
                <span style={{cursor: 'pointer', color: 'gray'}} onClick={() => setShowMore(false)}>   ..hide</span>
                </Box>
              </Box>
             )}

            <Divider my={'20px'} />
           </>)})}
          </Box>
         </Box>

         {/* approach & process */}
         <Box py={8}>
          <SectionTag message={'Development Approach & Process'} position={'start'} />

          <Box pt={3}>
            <Text className='paragraph'> {design_approach_text} </Text>
            
            <Box pt={4} display={'flex'} w={'full'} justifyContent={'space-between'} gap={2} flexWrap={'wrap'}>
              {dev_approach.map((ele, index)=> (
                <Box w={{base: 'full',  md: 'calc(50% - 0.5rem)', lg: 'calc(33.3% - 0.5rem)'}} key={index}>
                <Box boxShadow={'0 0 0px rgba(255, 255, 255, 0.5), 0 0 0px rgba(255,255,255, 0.3)'} border={'1px solid white'} borderRadius={'10px'}
                >
                  <Box p={8}>
                    <Heading pb={3} color={'blue.500'} >
                      {ele?.icon}
                    </Heading>
                    <Heading py={3} textTransform={'capitalize'}>
                      {ele.approach}
                    </Heading>
                    <Text fontSize={'18px'} width={'80%'}> {ele.message} </Text>
                  </Box>
                </Box>
                </Box>
              ))}
          </Box>
          </Box>
         </Box>

         {/* client & focus */}
         <Box py={8}>
          <SectionTag message={'Client & Focus'} position={'start'} />
          
          <Box pt={3}>
            <Text className='paragraph'> {client_focus_text} </Text>
          </Box>
         </Box>

        </Container>
    </Box>
  )
}

export default AboutPage