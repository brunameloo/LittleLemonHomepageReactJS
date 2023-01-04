import { Image } from '@chakra-ui/react'
import {HStack} from '@chakra-ui/react'
import {Link } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import logo from './img/logo.png'

function Header() {

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

    return (

        <Box bg='white' w='100%' p={4} color='black' display='flex' justifyContent='center'>
            <HStack spacing='40px'>
            <Image src={logo} alt='Little Lemon' width='150px' />
            <Link>Home</Link>
            <Link href='/#about' onClick={handleClick("about")}>About</Link>
            <Link href='/#menu' onClick={handleClick("menu")}>Menu</Link>
            <Link  href='/#reservation' onClick={handleClick("reservation")}>Reservations</Link>
            <Link href='/#menu' onClick={handleClick("menu")}>Order Online</Link>
            <Link>Login</Link>
            </HStack>  
        </Box>
              

    )
}

export default Header;