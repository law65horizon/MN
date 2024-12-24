import { Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import PorfolioModal from '../../Components/Modals/PorfolioModal'

const ShowImage = ({item}) => {
    const [clicked, isClicked] = useState(false)
    return (<>
        <Link display={'flex'} w={'max-content'} p={2} alignItems={'center'} justifyContent={'center'} mt={3} 
          bg={'transparent'} gap={2} onClick={() => isClicked(true)}
        >
          <Text>View</Text>
          <BsArrowUpRight />
        </Link>
        <PorfolioModal items={item} isClicked={clicked} setIsClicked={isClicked} diff={true}/>
    </>)
}

export default ShowImage