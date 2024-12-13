import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const PorfolioModal = ({items, index}) => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    console.log(items.link)
  return (<>
    <Box w={'500px'} minW={{base: 'full', sm: '500px'}} key={index} minH={'650px'} >
        <Box className='resize_img' backgroundImage={`url('.${items.img_scr}')`} cursor={'pointer'} onClick={onOpen}></Box>
        <Box display={'flex'} mt={4} h={'30px'} gap={2} alignItems={'center'}
          _hover={{fontSize: '25px',}}
        >
            <Text as={RouterLink} to={items.link} textTransform={'capitalize'}> {items.text} </Text>
            <Box display={'flex'} as={RouterLink} to={items.link} alignItems={'center'}>
               <BsArrowRight size={24} style={{marginTop: '4px'}}/>
            </Box>
        </Box>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} blockScrollOnMount={true}>
        <ModalOverlay />
        <ModalContent maxW={'600px'} overflow={'scroll'} top={'20px'} bg={'rgba(255, 255, 255, 0.15)'} className='noscrollbar'>
            <ModalCloseButton />
            <ModalBody px={3}>
                <Image 
                  src={items.full_img_src}
                // src={img_src}
                //   src='/11.PNG'
                />
            </ModalBody>
        </ModalContent>
    </Modal>
    {/* <Image src={img_src[0].src} /> */}
    {/* <Image src={img_sr} /> */}
  </>)
}

export default PorfolioModal