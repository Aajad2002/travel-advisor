import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa';
const List = ({ data }) => {
 
 
  return (
    <Box w={"100%"} h={"82vh"} overflow={["none","auto"]}>
      {data.map((el,i) => {  
             
        return el.photo && el.photo["images"] && <Flex key={i} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} mt={"15px"}>
          <Box  w={"30%"} position={"relative"}>

            <Image  w={'100%'} src={el.photo["images"].small.url} alt='hotels' />
            <Box p={"5px"} bg={"#ffffffe5"}  borderRadius={"60%"} position={"absolute"} top={"5px"} right={"5px"} ><FaRegHeart/></Box>
          </Box>
          <Box pl={"20px"} pt={"15px"} w={"70%"}>
            <Heading isTruncated fontSize={"18px"}>{i+1}. {el.name}</Heading>
           
            <Text>{el.price}</Text>
            <Text>{el["ranking_geo"]}</Text>
          </Box>
        </Flex>
      })}
    </Box>
  )
}

export default List