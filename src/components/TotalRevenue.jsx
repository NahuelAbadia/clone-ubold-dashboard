import React from 'react'
import {
  CircularProgress,
  CircularProgressLabel,
  IconButton,
  Stack,
  Text,
  Icon
} from '@chakra-ui/react'
import { BsThreeDotsVertical, BsArrowDown, BsArrowUp } from "react-icons/bs"

const TotalRevenue = () => {
  return (
    <>
      <Stack
        w="32%"
        bg="#FAFAFA"
        borderRadius="5px"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={3}
          pl={6}
          pr={2}
        >
          <Text fontWeight="semibold">Total Revenue</Text>
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

        <Stack alignItems="center">
          <CircularProgress value={68} size='175px' color="red.300" thickness="8px">
            <Stack spacing={7}>
              <CircularProgressLabel
                fontSize="16px"
                fontWeight="semibold"
                color="#98A9B0"
              >
                Revenue
              </CircularProgressLabel>
              <CircularProgressLabel
                fontSize="16px"
                fontWeight="semibold"
                color="#98A9B0"
              >
                68%
              </CircularProgressLabel>
            </Stack>
          </CircularProgress>
          <Text
            fontWeight="semibold"
            fontSize="sm"
            color="#98A9B0"
          >
            Total sales made today
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="3xl"
          >
            $178
          </Text>
          <Text
            px={14}
            textAlign="center"
            fontSize="sm"
            color="#98A9B0"
          >
            Traditional heading elements are designed to work best in the meat of your page content.
          </Text>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-around"
          pt={4}
          py={6}
        >
          <Stack>
            <Text color="#98A9B0" textAlign="center">Target</Text>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Icon
                as={BsArrowDown}
                color="red"
                w={4}
                h={4}
              />
              <Text fontWeight="semibold" fontSize="lg">$7.8k</Text>
            </Stack>
          </Stack>

          <Stack>
            <Text color="#98A9B0" textAlign="center">Last Week</Text>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Icon
                as={BsArrowUp}
                color="green"
                w={4}
                h={4}
              />
              <Text fontWeight="semibold" fontSize="lg">$1.4k</Text>
            </Stack>
          </Stack>

          <Stack>
            <Text color="#98A9B0" textAlign="center">Last Month</Text>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Icon
                as={BsArrowDown}
                color="red"
                w={4}
                h={4}
              />
              <Text fontWeight="semibold" fontSize="lg">$15k</Text>
            </Stack>
          </Stack>

        </Stack>
      </Stack >
    </>
  )
}

export default TotalRevenue