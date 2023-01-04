import { ChakraProvider, VStack } from '@chakra-ui/react';
import Header from './Components/Header';
import Banner  from './Components/Banner';
import Highlights from './Components/Highlights';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer'

function App() {
  
  return (
    <ChakraProvider>
      <Header /> 
      <VStack spacing='30px'>        
        <Banner />
        <Highlights />
        <Reservation />        
      </VStack>
      <Footer />   
    </ChakraProvider>
  )
}

export default App;
