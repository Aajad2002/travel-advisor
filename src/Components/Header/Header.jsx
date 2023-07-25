import { Button, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const Header = ({ setSearch ,setType,type}) => {
    const [inputvalue, setInputvalue] = useState("")
    const handleSearch = () => {
        setSearch(inputvalue)
    }
    return (
        <Flex  bg={"#fff"}  pl={"15px"} pr={"15px"} h={"60px"} border={"1px solid #333"} m={"auto"} justifyContent={"space-between"} alignItems={"center"}>
            <Heading fontSize={["24px","30px"]}>Travel</Heading>
            <InputGroup w={["45%","30%"]} m="auto" >
                <InputLeftElement>
                    <FaSearch />
                </InputLeftElement>
                <Input value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} focusBorderColor='transparent' borderRadius={"3rem"} placeholder="where to go ?" />
                <InputRightElement w={["27%","25%","14%"]}>
                    <Button w={"100%"} onClick={handleSearch} borderRightRadius={"3rem"} h="100%"  colorScheme="teal">
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Select w={["24%","20%"]} value={type} onChange={(e)=>{
                setType(e.target.value)
            }}  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} borderColor={"transparent"} borderRadius={"3rem"} border={"1px solid #333"} >
                <option>filters</option>
                <option value={"hotels"}>Hotels</option>
                <option value={"restaurants"}>Restaurants</option>
                <option value={"attractions"}>Attractions</option>
            </Select>
        </Flex>
    )
}

export default Header