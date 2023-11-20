import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from './pages/Landing/Landing'
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* add pages here */}
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
