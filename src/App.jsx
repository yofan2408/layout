import { useState } from 'react'
import Button from '@mui/material/Button'
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button size="small" variant="contained">Contained</Button>
      <Button disabled variant="outlined">Outlined</Button>
      <Button variant="contained" href="#text-buttons">Link</Button>
      <Button startIcon={<SettingsIcon />} variant="contained">Link</Button>
    </div>
  )
}

export default App
