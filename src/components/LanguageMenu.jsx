import React, { useState } from 'react'
import {
  IconButton,
  Image,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import eeuu from "../assets/eeuu.png"
import alemania from "../assets/alemania.png"
import italia from "../assets/italia.png"
import españa from "../assets/españa.png"
import rusia from "../assets/rusia.png"

const LanguageMenu = () => {

  const [image, setImage] = useState([eeuu])

  return (
    <>
      <Menu>
        <MenuButton as={Stack} cursor="pointer">
          <IconButton
            bg="none"
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
          >
            <Image
              src={image}
              w={7}
              h={7}
              objectFit="contain"
              cursor="pointer"
            />
          </IconButton>
        </MenuButton>
        <MenuList>
          <MenuGroup title=''>
            <MenuItem
              onClick={() => setImage(eeuu)}
            >
              <Image
                src={eeuu}
                w={5}
                h={5}
                ml={2}
                objectFit="contain"
                cursor="pointer"
              />
              <Text pl={3}>EEUU</Text>
            </MenuItem>
            <MenuItem
              onClick={() => setImage(alemania)}
            >
              <Image
                src={alemania}
                w={5}
                h={5}
                ml={2}
                objectFit="contain"
                cursor="pointer"
              />
              <Text pl={3}>German</Text>
            </MenuItem>
            <MenuItem
              onClick={() => setImage(italia)}
            >
              <Image
                src={italia}
                w={5}
                h={5}
                ml={2}
                objectFit="contain"
                cursor="pointer"
              />
              <Text pl={3}>Italian</Text>
            </MenuItem>
            <MenuItem
              onClick={() => setImage(españa)}
            >
              <Image
                src={españa}
                w={5}
                h={5}
                ml={2}
                objectFit="contain"
                cursor="pointer"
              />
              <Text pl={3}>Spanish</Text>
            </MenuItem>
            <MenuItem
              onClick={() => setImage(rusia)}
            >
              <Image
                src={rusia}
                w={5}
                h={5}
                ml={2}
                objectFit="contain"
                cursor="pointer"
              />
              <Text pl={3}>Russian</Text>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  )
}

export default LanguageMenu