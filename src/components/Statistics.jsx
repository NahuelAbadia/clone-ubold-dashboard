import React from 'react'
import Cards from '../components/Cards';
import { IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { BiFilter } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";

const Statistics = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Stack
          py={6}
        >
          <Text
            fontSize="xl"
            fontWeight="semibold"
          >
            Dashboard
          </Text>
        </Stack>

        <Stack
          direction="row"
          w="23%"
          alignItems="center"
          justifyContent="end"
        >
          <Stack
            direction="row"
            alignItems="center"
            w="55%"
          >
            <Input
              type="date"
              h="30px"
              size='md'
              variant="outline"
              pl={5}
              bg="#FAFAFA"
              border="none"
              rounded="none"
            />
          </Stack>

          <IconButton
            aria-label='Search'
            icon={<HiOutlineRefresh />}
            colorScheme="blue"
            fontSize='15px'
            size="sm"
            border="none"
            cursor="pointer"
            color="#FAFAFA"
          />

          <IconButton
            aria-label='Search'
            icon={<BiFilter />}
            colorScheme="blue"
            fontSize='15px'
            size="sm"
            border="none"
            cursor="pointer"
            color="#FAFAFA"
          />

        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={5}
      >
        <Cards />
      </Stack>
    </Stack>
  )
}

export default Statistics