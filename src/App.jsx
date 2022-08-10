import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import Navbar from './components/Navbar'
import { Box, Stack } from '@mui/material'

function App() {

  return (
    <Box className="App">
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  )
}

export default App
