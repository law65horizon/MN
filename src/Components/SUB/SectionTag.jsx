import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const SectionTag = ({message, position}) => {
  return (
    <Box pb={3} w={'full'} display={'flex'} justifyContent={position || 'unset'}>
        <Box bg={'white'} color={'black'} borderRadius={'15px / 50px'} p={2} display={'flex'} alignItems={'center'} gap={1}>
            <Box w={'10px'} h={'10px'} bg={'black'} borderRadius={'50%'}></Box>
            <Text> {message} </Text>
        </Box>
    </Box>
  )
}

export default SectionTag