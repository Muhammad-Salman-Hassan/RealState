import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

import {FcAbout, FcHome, FcMenu, FcSearch} from 'react-icons/fc'
import {FiKey} from 'react-icons/fi'
const Navbar = () => {
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.200">
        <Box fontSize="3xl" color="green.700" fontWeight="bold">
            <Link href='/' paddingLeft="2px">Jaidaad.</Link>
        </Box>
        <Spacer/>
        <Menu>
            <MenuButton varient="outlined" as={IconButton} icon={<FcMenu/>} />
            <MenuList>
                <Link href="/">
                    <MenuItem icon={<FcHome/>}>Home</MenuItem>
                </Link>
                <Link href="/search">
                    <MenuItem icon={<FcSearch/>}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale">
                    <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent">
                    <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    </Flex>
  )
}

export default Navbar