import React from "react"
import { Badge, Icon, Stack, Text, Link, Tag } from "@chakra-ui/react"
import { Apps, Navigation } from "../api/SidebarData"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { BiChevronRight } from "react-icons/bi"

const Sidebar = () => {
  return (
    <>
      <Stack
        w="13%"
        bg="#FCFCFC"
        fontFamily="Nunito Sans, sans-serif"
      >
        <Stack>
          <Text
            color="#6c757d"
            fontWeight={700}
            fontSize="12px"
            textTransform="uppercase"
            pt={7}
            pl={5}
          >
            Navigation
          </Text>
          <Stack
            fontSize="sm"
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
              py={4}
              pl={7}
            >
              <Stack direction="row">
                <Icon as={HiOutlineDesktopComputer} w={4} h={4} />
                <Link
                  to="/"
                  _hover={{ color: "#12c9e1" }}
                >
                  Dashboards
                </Link>
              </Stack>
              <Stack pr={6}>
                <Tag bg="green.400" borderRadius="full" color="#FAFAFA" size="sm" textAlign="center">4</Tag>
              </Stack>
            </Stack>
            <Stack
              pl={14}
              justifyContent="center"
              spacing={4}
            >
              {Navigation.map(({ id, name }) => (
                <Link
                  key={id}
                  to="/"
                  color="#6c757d"
                  _hover={{ color: "#12c9e1" }}
                >
                  {name}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Text
            color="#6c757d"
            fontWeight={700}
            fontSize="12px"
            textTransform="uppercase"
            pt={7}
            pb={4}
            pl={5}
          >
            Apps
          </Text>
          <Stack
            pl={6}
            spacing={6}
            fontSize="sm"
          >
            {Apps.map(({ name, link, tag, icon, arrow }) => (
              <Stack
                key={name}
                direction="row"
                spacing={3}
                justifyContent="space-between"
              >
                <Stack direction="row">
                  <Icon
                    as={icon}
                    w={4}
                    h={4}
                    color="#6c757d"
                  />
                  <Link
                    to={link}
                    color="#6c757d"
                    _hover={{ color: "#12c9e1" }}
                  >
                    {name}
                  </Link>
                </Stack>
                <Stack pr={6}>
                  {tag === "false" ? null : <Badge colorScheme="pink">Hot</Badge>}
                  {arrow === "false" ? null : <Icon as={BiChevronRight} w={4} h={4} color="#6c757d" />}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>

      </Stack>
    </>
  )
}

export default Sidebar