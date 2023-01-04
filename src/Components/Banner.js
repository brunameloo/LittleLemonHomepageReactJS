import { Box, VStack, Heading, Button, Image } from '@chakra-ui/react'
import bannerPicture from './img/banner-picture.png'

function Banner() {
    return(
        <Box bg='#495E57' w='100%' p={4} color='black' display='flex' alignItems='center' justifyContent='center' gap='100px' id='about-section'>            

            

            <VStack spacing='10px' display='flex' alignItems='flex-start'>

                <Heading as='h1' size='2xl' color='#F4CE14'>Little Lemon</Heading>
                <Heading as='h2' size='xl' color='white'>Chicago</Heading>
                <Heading as='h3' size='sm' color='white'>We are a family owned Mediterranean restaurant,<br/>focused on traditional recipes served with a modern twist.</Heading>                    
                <Button bg='#F4CE14'>Reserve a Table</Button>

            </VStack>

            
            <Image boxSize='300px' src={bannerPicture} alt='Main Dishe'  borderRadius='10px'></Image>

             
        </Box>

    )
}

export default Banner