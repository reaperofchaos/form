// import './App.css'
import { Box } from '@mui/material'
import TestFormComponent from './TestForm'

function App() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <p>Form Instance 1</p>
   <TestFormComponent name="form1" />
   <p>Form Instance 2</p>
   <TestFormComponent name="form2" />
   </Box>
  )
}

export default App
