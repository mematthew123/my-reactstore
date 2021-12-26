import React, { useContext } from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  VStack
} from "@chakra-ui/react"

import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'


const NavMenu = () => {

  const { isMenuOpen, closeMenu } = useContext(ShopContext)

  return (
    <>
      <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack p="2rem">
                <Link to="/">Connect</Link>
                <Link to="/">Learn More</Link>
                <Link to="/">Sustainability</Link>
                <Link to="/">Neighbors</Link>
              </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default NavMenu
