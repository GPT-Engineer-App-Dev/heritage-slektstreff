import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Link, Box } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";
import Slektstreff2019 from "./pages/Slektstreff2019.jsx";
import TidigereSlektstreffer from "./pages/TidigereSlektstreffer.jsx";
import Historie from "./pages/Historie.jsx";
import Kontakt from "./pages/Kontakt.jsx";

function App() {
  return (
    <Router>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="brand.900" color="white">
        <Box>
          <Link href="/" p={{ base: 2, md: 4 }}>Hjem</Link>
          <Link href="/slektstreff2019" p={{ base: 2, md: 4 }}>Slektstreff 2019</Link>
          <Link href="/tidigereslektstreffer" p={{ base: 2, md: 4 }}>Tidigere Slektstreffer</Link>
          <Link href="/historie" p={{ base: 2, md: 4 }}>Historie</Link>
          <Link href="/kontakt" p={{ base: 2, md: 4 }}>Kontakt</Link>
        </Box>
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/slektstreff2019" element={<Slektstreff2019 />} />
        <Route exact path="/tidigereslektstreffer" element={<TidigereSlektstreffer />} />
        <Route exact path="/historie" element={<Historie />} />
        <Route exact path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;