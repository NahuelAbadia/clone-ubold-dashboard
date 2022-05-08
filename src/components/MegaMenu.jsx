import React from 'react'
import {
  Button,
  Icon,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { UIComponents, Applications, ExtraPages } from "../api/MegaMenuData"

const MegaMenu = () => {

  return (
    <Menu>
      <MenuButton
        as={Stack}
        cursor="pointer"
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          py={6}
        >
          <Text>Mega Menu</Text>
          <Icon
            as={BiChevronDown}
            w={4}
            h={4}
          />
        </Stack>
      </MenuButton>
      <MenuList w="1900px">
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Stack
            w="55%"
            direction="row"
            justifyContent="space-between"
            color="#333"
          >
            <MenuGroup title='UI Components'>
              {UIComponents.map(item => (
                <MenuItem icon={<BiChevronRight />} color="#6c757d">{item}</MenuItem>
              ))}
            </MenuGroup>
            <MenuGroup title='Applications'>
              {Applications.map(item => (
                <MenuItem icon={<BiChevronRight />} color="#6c757d">{item}</MenuItem>
              ))}
            </MenuGroup>
            <MenuGroup title='Extra Pages'>
              {ExtraPages.map(item => (
                <MenuItem icon={<BiChevronRight />} color="#6c757d">{item}</MenuItem>
              ))}
            </MenuGroup>
          </Stack>
          <Stack
            w="40%"
            pt={6}
            alignItems="center"
            color="#333"
          >
            <Stack
              spacing={0}
              alignItems="center"
            >
              <Text fontSize="2xl" fontWeight="semibold">Special Discount Sale!</Text>
              <Text fontSize="lg" fontWeight="semibold">Save up to 70% off.</Text>
            </Stack>
            <Stack pt={4}>
              <Button borderRadius="full" colorScheme="purple" fontWeight="normal">Download Now</Button>
            </Stack>
          </Stack>
        </Stack>
      </MenuList>
    </Menu>
  )
}

export default MegaMenu