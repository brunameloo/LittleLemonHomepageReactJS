import {Box, Image, Text} from '@chakra-ui/react'
import logo from './img/logo.png'

function Footer() {
    return(

        <Box bg='white' w='100%' p={4} color='black' display='flex' justifyContent='space-around' alignItems='center'>
            <Image src={logo} width='150px'></Image>
            <Text>Little Lemon All Rights Reserved 2023</Text>
        </Box>
    )
}

export default Footer