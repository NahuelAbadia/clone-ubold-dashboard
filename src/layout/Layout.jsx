import React from 'react'
import Statistics from '../components/Statistics';
import TotalRevenue from '../components/TotalRevenue';
import SalesAnalytics from '../components/SalesAnalytics';
import TopUsersBalances from '../components/TopUsersBalances';
import RevenueHistory from '../components/RevenueHistory';
import { Stack } from "@chakra-ui/react"

const Layout = () => {
  return (
    <>
      <Stack
        w="87%"
        pl={6}
        pr={10}
        pb={16}
      >
        <Statistics />
        <Stack
          direction="row"
          pt={4}
          maxH="500px"
          h="100%"
          justifyContent="space-between"
        >
          <TotalRevenue />
          <SalesAnalytics />
        </Stack>
        <Stack
          direction="row"
          pt={4}
          justifyContent="space-between"
        >
          <TopUsersBalances />
          <RevenueHistory />
        </Stack>
      </Stack>
    </>
  )
}

export default Layout;