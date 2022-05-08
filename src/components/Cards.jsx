import React from 'react'
import { Icon, Stack, Text, } from "@chakra-ui/react"
import { Stats } from '../api/DashboardData'

const Cards = () => {
  return (
    <>
      {Stats.map(({ value, title, icon, bgColor, iconColor }) => (
        <Stack
          key={title}
          direction="row"
          w="384px"
          h="120px"
          px={7}
          bg="#FAFAFA"
          borderRadius="5px"
          alignItems="center"
          justifyContent="space-between"
          fontFamily="Nunito Sans, sans-serif"
        >
          <Stack>
            <Stack
              w="70px"
              h="70px"
              bg={bgColor}
              border="1px"
              borderColor={iconColor}
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
            >
              <Icon
                as={icon}
                w={6}
                h={6}
                color={iconColor}
              />
            </Stack>
          </Stack>

          <Stack>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textAlign="end"
            >
              {value}
            </Text>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="#6C757D"
            >
              {title}
            </Text>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default Cards