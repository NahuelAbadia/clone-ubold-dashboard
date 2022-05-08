import React from 'react'
import {
  Icon,
  Image,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsGearFill } from "react-icons/bs";
import { BiChevronDown, BiUser, BiLockAlt } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md"

const User = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Stack}
          cursor="pointer"
        >
          <Stack
            direction="row"
            alignItems={"center"}
            color="#ADB0B4"
            p={4}
          >
            <Image
              src="https://pbs.twimg.com/profile_images/1397638387901861892/SJ1k1Xyq_400x400.jpg"
              objectFit={"contain"}
              borderRadius="50%"
              w={9}
              h={9}
            />
            <Text fontSize="sm">Nahuel</Text>
            <Icon
              as={BiChevronDown}
              w={4}
              h={4}
            />
          </Stack>
        </MenuButton>
        <MenuList>
          <MenuGroup title='Welcome !'>
            <MenuItem icon={<BiUser />}>My Account</MenuItem>
            <MenuItem icon={<BsGearFill />}>Settings </MenuItem>
            <MenuItem icon={<BiLockAlt />}>Lock Screen </MenuItem>
          </MenuGroup>
          <MenuDivider color="gray.100" />
          <MenuGroup title=''>
            <MenuItem icon={<MdOutlineLogout />}>Logout</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  )
}

export default User