import React, { useState } from 'react'
import {
  Box,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFullscreen, BsFullscreenExit, BsGearFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { CgBell } from "react-icons/cg"
import { useNavigate } from "react-router-dom";
import MegaMenu from "./MegaMenu"
import icon from "../assets/app-icon.png"
import logo from "../assets/logo-light.png"
import LanguageMenu from './LanguageMenu';
import User from './User';
import CreateNew from './CreateNew';

const Navbar = () => {

  const [fullScreen, setFullScreen] = useState(false)
  const [image, setImage] = useState(BsFullscreen)

  const launchFullScreen = () => {
    setFullScreen(!fullScreen)
    setImage(BsFullscreenExit)
    if (fullScreen === false) {
      document.documentElement.requestFullscreen()
    } else {
      setImage(BsFullscreen)
      document.exitFullscreen()
    }
  }

  const navigate = useNavigate()

  return (
    <>
      <Stack
        backgroundColor="#38414A"
        borderBottom={"1px"}
        borderColor="gray.300"
        h="70px"
        direction="row"
      >
        <Stack
          w="100%"
          direction="row"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            w="28%"
          >
            <Stack
              w="46%"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={logo}
                w="125px"
                h="20px"
                objectFit="contain"
                cursor="pointer"
                onClick={() => {
                  navigate("/")
                }}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              color="#ADB0B4"
              fontSize="sm"
              w="54%"
            >
              <IconButton
                aria-label='Menu'
                icon={<BiMenu />}
                variant="outline"
                fontSize='30px'
                border="none"
                cursor="pointer"
                bg="transparent"
                color="#FAFAFA"
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
              />
              <CreateNew />
              <MegaMenu />
            </Stack>

          </Stack>

          <Stack
            direction="row"
            w="32%"
            justifyContent="space-between"
            pr={4}
          >
            <Stack
              direction="row"
              w="32%"
              alignItems="center"
              pr={3}
            >
              <InputGroup size='md'>
                <Input
                  h="40px"
                  size='md'
                  variant="outline"
                  pl={5}
                  bg="#464E57"
                  border="none"
                  borderRadius="20px"
                  placeholder="Search..."
                  _placeholder={{ color: "#7B8188", fontSize: "13.5px", fontWeight: "semibold" }}
                />
                <InputRightElement
                  h="40px"
                  pr={3}
                >
                  <IconButton
                    aria-label='Search'
                    icon={<AiOutlineSearch />}
                    variant="outline"
                    fontSize='18px'
                    border="none"
                    cursor="pointer"
                    bg="transparent"
                    color="#7B8188"
                    _active={{ bg: "none" }}
                    _hover={{ bg: "none" }}
                    _focus={{ bg: "none" }}
                  />
                </InputRightElement>
              </InputGroup>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              spacing={4}
            >
              <IconButton
                aria-label='full-screen'
                icon={image}
                variant="outline"
                fontSize='20px'
                border="none"
                cursor="pointer"
                bg="transparent"
                color="#ADB0B4"
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                onClick={launchFullScreen}
              />
              <IconButton
                bg="none"
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
              >
                <Image
                  src={icon}
                  w={6}
                  h={6}
                  objectFit="contain"
                  cursor="pointer"
                />
              </IconButton>

              <LanguageMenu />

              <Box
                as="button"
                color="blackAlpha.600"
                cursor="pointer"
                className="position-relative"
              >
                <CgBell
                  size="26px"
                  color="#ADB0B4"
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9
                </span>
              </Box>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
            >

              <User />

              <Stack pr={3}>
                <IconButton
                  aria-label='Options'
                  icon={<BsGearFill />}
                  variant="outline"
                  fontSize='24px'
                  border="none"
                  cursor="pointer"
                  bg="transparent"
                  color="#ADB0B4"
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                />
              </Stack>
            </Stack>

          </Stack>

        </Stack>
      </Stack>
    </>
  )
}

export default Navbar;
