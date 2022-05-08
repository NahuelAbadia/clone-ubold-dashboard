import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@chakra-ui/react';
import { HOME } from "./routes/routes"

function App() {
  return (
    <>
      <Router>
        <Box bg="#EEEFF2">
          <Navbar />
          <Stack
            direction="row"
            w="100%"
          >
            <Sidebar />
            <Routes>
              <Route exact path={HOME} element={<Layout />} />
            </Routes>
          </Stack>
        </Box>
      </Router>
    </>
  );
}

export default App;
