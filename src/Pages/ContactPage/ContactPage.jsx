import { Box, Button, Container, Heading, Input, Link, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
// import emailjs from '@emailjs/browser'
import emailjs from '@emailjs/browser'
// import { Hero } from '../../Components/Hero/Hero'

import { BiMailSend, BiPhoneCall } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import CTA from '../../Components/CTA/CTA'
import Hero from '../../Components/Hero/Hero'
import useShowToast from '../../hooks/useShowToast'
import { send, init, sendForm } from '@emailjs/browser'

const ContactPage = () => {
    const showToast = useShowToast()
    const [isLoading, setIsloading] = useState(false)
    const [inputs, setInputs] = useState({
        fullname: '',
        email: '',
        subject: '',
        reply_to: '',
        message: ''
    })
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const hero_text = `"Let’s Build Something Great Together"
     Have a project in mind, a question to ask, or just want to connect? I’m always excited to collaborate on new ideas and help bring 
     visions to life. Drop me a message, and I’ll get back to you as soon as possible. Let’s create something amazing!
    `
    function checkInputs() {
      if (!inputs.fullname || !inputs.email || !emailRegex.test(inputs.email) || !inputs.message) {
        if(!inputs.fullname) {
          showToast('Error', 'Full name required', 'error')
        }
        if(!inputs.email || !emailRegex.test(inputs.email)) {
          showToast('Error', 'Invalid email', 'error')
        }
        if(!inputs.message) {
          showToast('Error', 'Message required', 'error')
        } 
        return false
      } else return 'true'
    }
    const handleSendMessage = async(e) => {
      e.preventDefault()
      if(!checkInputs()) return
      if(!navigator.onLine) {
        showToast('Error', 'Client is offline', 'error')
        return
      }
      if(isLoading) return
      setIsloading(true)
      // console.log('dois')
      setInputs({...inputs, reply_to: inputs.email})
      try {
        init('T6UiuUR6DYaW01m4R')
        console.log(inputs)
        send(
          // import.meta.env.SERVICE_ID, // Replace with your EmailJS Service ID
          'service_vzaogtz', //import.meta.env.TEMPLATE_ID, // Replace with your EmailJS Template ID
          'template_wrjpk88',
          inputs,
          //import.meta.env.PUBLIC_KEY // Replace with your EmailJS Public Key
        )
        showToast('Success', 'Sent successfully', 'success')
        setInputs({inputs, fullname: '', message: '', subject: '', email: '', reply_to:''})
      } catch (error) {
        showToast('Error', error.message, 'error')
      } finally {
        setIsloading(false)
      }
    }
  return (
    <Box>
        <Hero backgroundImage={`/about-bg-img.webp`} heading={'Contact for Premium Business Services'} text={hero_text}/>
        {/* <Hero backgroundImage={'../../../public/why-choose-us.jpg'}/> */}

        <Container maxW={'8xl'} pt={8}>
            <Box display={'flex'} gap={2} flexDir={{base: 'column', md: 'row'}} justifyContent={'space-between'}>
                <Box w={{base: 'full', md:'50%'}}>
                    <Heading>Leave A Message</Heading>
                    <form id="contact-form" onSubmit={handleSendMessage}>
                    {/* <form id="contact-form" action='https://formspree.io/f/xkgnappz' method='POST'> */}
                      <Box pl={2} display={'flex'} flexDir={'column'} gap={2} pt={4}>
                        <Input placeholder='Name' type='text' value={inputs.fullname} id='fullname' name='name'
                          onChange={(e) => setInputs({...inputs, fullname: e.target.value})} 
                        />
                        <Input placeholder='Email' errorBorderColor='red' type='email' name='email' value={inputs.email} 
                          onChange={(e) => setInputs({...inputs, email: e.target.value})}
                        />
                        <Input placeholder='Subject' type='text' value={inputs.subject}
                          onChange={(e) => setInputs({...inputs, subject: e.target.value})} name='subject'
                        />
                        <Textarea placeholder='Enter property name desc' w={'full'} size={'md'} 
                         _placeholder={{color: 'black', fontWeight: '600'}} name='message'
                           fontWeight={600} resize={'vertical'} value={inputs.message}
                          onChange={(e) => setInputs({...inputs, message: e.target.value})}
                        />
                        <Button type='submit' isLoading={isLoading} >Send Message</Button>
                      </Box>
                    </form>
                </Box>
                <Box w={{base: 'full', md: 'unset'}}>
                    <Heading>Get In Touch</Heading>
                    <Box pt={4} pl={2} display={'flex'} flexDir={'column'} gap={3} fontSize={'20px'}>
                        <Box display={'flex'} gap={1} alignItems={'center'}>
                            <BiMailSend size={24} />
                            <Link>michaelnana656@gmail.com</Link>
                        </Box>
                        <Box display={'flex'} gap={1} alignItems={'center'}>
                            <BiPhoneCall size={24} />
                            <Link href='tel:+2349157039670'>+234 91 5703 9670</Link>
                        </Box>
                        <Box display={'flex'} gap={1} alignItems={'center'}>
                            <BsGithub size={24} />
                            <Link href='https://github.com'>michaelnana656@gmail.com</Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
        <CTA />
    </Box>
  )
}

export default ContactPage