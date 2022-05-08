import React from 'react'
import {
  Icon,
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
import { BiChevronDown, BiUser, BiBriefcaseAlt } from "react-icons/bi";
import { FiHeadphones } from "react-icons/fi"
import { IoStatsChartSharp } from "react-icons/io5"

const CreateNew = () => {
  return (
    <Menu>
      <MenuButton
        as={Stack}
        cursor="pointer"
      >
        <Stack
          direction="row"
          alignItems={"center"}
          color="#ADB0B4"
          py={6}
        >
          <Text>Create New</Text>
          <Icon
            as={BiChevronDown}
            w={4}
            h={4}
          />
        </Stack>
      </MenuButton>
      <MenuList color="#6c757d">
        <MenuGroup>
          <MenuItem icon={<BiBriefcaseAlt />}>New Projects</MenuItem>
          <MenuItem icon={<BiUser />}>Create Users</MenuItem>
          <MenuItem icon={<IoStatsChartSharp />}>Revenue Report</MenuItem>
          <MenuItem icon={<BsGearFill />}>Settings</MenuItem>
        </MenuGroup>
        <MenuDivider color="gray.100" />
        <MenuGroup>
          <MenuItem icon={<FiHeadphones />}>Help & Supports</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default CreateNew
