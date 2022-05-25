import { Box } from '@mui/system'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
  return (
    <Box sx={{ backgroundColor: 'var(--body-bg)', color: 'var(--text-color)', width: 300, height: '100%', paddingTop: '60px'}}>
      <Box sx={{display: 'flex', alignItems: 'center', paddingTop:'1em'}}>
        <Box sx={{paddingLeft: '1em', width: 260}}>
          <p style={{fontWeight: 'bold', margin:0}}>CAT HQ</p>
          <FiberManualRecordIcon sx={{color:'green', fontSize:'small', marginRight:'0.5em'}} />
          <span>Pixie The Queen</span>
        </Box>
        <CreateIcon style={{backgroundColor: 'var(--icon-color)', color:'var(--icon-bg)', borderRadius: '50%', padding:'0.2em'}} />
      </Box>

    </Box>
  )
}

export default Sidebar
