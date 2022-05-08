import React from 'react'
import {
  Button,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { Users } from '../api/DashboardData'

const TopUsersBalances = () => {
  return (
    <>
      <Stack
        w="49%"
        bg="#FAFAFA"
        borderRadius="5px"
        py={3}
        pl={6}
        pr={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontWeight="semibold">Top 5 Users Balances</Text>
          <IconButton
            aria-label="Options"
            icon={<BsThreeDotsVertical />}
            variant="outline"
            fontSize='18px'
            border="none"
            cursor="pointer"
            bg="transparent"
            color="#98A9B0"
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
          />
        </Stack>
        <Stack
          w="100%"
          pr={4}
        >
          <Stack
            bg="gray.200"
            direction="row"
            py={2}
            px={4}
            pr={10}
            justifyContent="space-between"
          >
            <Text>Profile</Text>
            <Text pl={24}>Currency</Text>
            <Text>Balance</Text>
            <Text>Reserved in orders</Text>
            <Text>Action</Text>
          </Stack>

          {Users.map(({ nombre, image, currency, icon, balance, rio }) => (
            <Stack direction="row" alignItems="center" pb={4} pl={2}>
              <Stack
                direction="row"
                spacing={5}
                alignItems="center"
                w="30%"
              >
                <Image
                  src={image}
                  w={10}
                  h={10}
                  borderRadius="full"
                />
                <Stack spacing={0}>
                  <Text>{nombre}</Text>
                  <Text fontSize="xs" color="#98A9B0">Member since 2017</Text>
                </Stack>
              </Stack>
              <Stack w="10%" direction="row" alignItems="center">
              <Icon
                as={icon}
                color="#6658dd"
                w={4}
                h={4}
              />
                <Text textAlign="center" fontWeight="normal" color="#98A9B0">{currency}</Text>
              </Stack>
              <Stack w="20%">
                <Text textAlign="center" fontWeight="normal" color="#98A9B0">{balance}</Text>
              </Stack>
              <Stack w="25%">
                <Text textAlign="center" fontWeight="normal" color="#98A9B0">{rio}</Text>
              </Stack>
              <Stack w="15%" direction="row" justifyContent="center">
                <Button colorScheme="gray" h="33px" color="blackAlpha.800">+</Button>
                <Button colorScheme="red" h="33px">-</Button>
              </Stack>
            </Stack>
          ))}

        </Stack>
      </Stack>
    </>
  )
}

export default TopUsersBalances