import React from 'react'
import {
  Stack,
  Text,
  Button
} from '@chakra-ui/react'
import BarChart from './BarChart'

const SalesAnalytics = () => {

  return (
    <>
      <Stack
        w="66%"
        h="100%"
        bg="#FAFAFA"
        borderRadius="5px"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={5}
          px={6}
        >
          <Text fontWeight="semibold">Sales Analytics</Text>
          <Stack direction="row" spacing={1}>
            <Button size="xs" rounded="none">Today</Button>
            <Button size="xs" rounded="none">Weekly</Button>
            <Button size="xs" rounded="none" bg="gray.500" color="#FAFAFA">Monthly</Button>
          </Stack>
        </Stack>

        <Stack
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
        >
          <BarChart />
        </Stack>

      </Stack >
    </>
  )
}

export default SalesAnalytics