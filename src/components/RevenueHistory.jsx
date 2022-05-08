import React from 'react'
import {
  Badge,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BsThreeDotsVertical, BsPencilFill } from "react-icons/bs"
import { RevenueHistoryData } from '../api/DashboardData'

const RevenueHistory = () => {
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
          <Text fontWeight="semibold">Revenue History</Text>
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
            <Text>Marketplaces</Text>
            <Text pl={2}>Date</Text>
            <Text>Payouts</Text>
            <Text>Status</Text>
            <Text>Action</Text>
          </Stack>

          {RevenueHistoryData.map(({ marketplaces, date, payouts, status, color }) => (
            <Stack
              direction="row"
              alignItems="center"
              pl={2}
              fontFamily="Nunito Sans, sans-serif"
              fontSize="15px"
              pt={1}
            >
              <Stack
                direction="row"
                alignItems="center"
                w="28%"
              >
                <Text pl={2} fontSize="15px" color="#343a40">{marketplaces}</Text>
              </Stack>
              <Stack
                w="17%"
                direction="row"
                alignItems="center"
              >
                <Text textAlign="center" fontWeight="normal" color="#98A9B0">{date}</Text>
              </Stack>
              <Stack
                w="20%"
                pl={7}
              >
                <Text fontWeight="normal" color="#98A9B0">{payouts}</Text>
              </Stack>
              <Stack
                w="20%"
                alignItems="center"
              >
                <Badge colorScheme={color}>{status}</Badge>
              </Stack>
              <Stack
                w="20%"
                direction="row"
                justifyContent="center"
              >
                <IconButton
                  aria-label="Options"
                  icon={<BsPencilFill />}
                  variant="outline"
                  fontSize='9px'
                  border="none"
                  cursor="pointer"
                  bg="gray.100"
                />
              </Stack>
            </Stack>
          ))}


        </Stack>
      </Stack>
    </>
  )
}

export default RevenueHistory