import { Box } from '@mui/system'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from "./SidebarOption.js"
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase.js';

function Sidebar() {
  const [channels, loading, error] = useCollection(collection(db, 'rooms'));
  return (
    <Box sx={{ flex: "0.3",backgroundColor: 'var(--body-bg)', color: 'var(--text-color)', minHeight: 'calc(100vh - 60px)', paddingTop: '60px'}}>
      <Box sx={{display: 'flex', alignItems: 'center', paddingTop:'1em'}}>
        <Box sx={{paddingLeft: '1em', width: 240}}>
          <h3>CAT HQ</h3>
          <FiberManualRecordIcon sx={{color:'green', fontSize:'small', marginRight:'0.5em'}} />
          <span style={{display: 'inline-block',paddingTop: '0.2em'}}>Pixie The Queen</span>
        </Box>
        <CreateIcon style={{backgroundColor: 'var(--icon-color)', color:'var(--icon-bg)', borderRadius: '50%', padding:'0.2em'}} />
      </Box>
      <SidebarOption Icon={CommentIcon} title={'Threads'} />
      <SidebarOption Icon={InboxIcon} title={'Mentions & reactions'} />
      <SidebarOption Icon={DraftsIcon} title={'Saved items'} />
      <SidebarOption Icon={BookmarkBorderIcon} title={'Channel browser'} />
      <SidebarOption Icon={GroupIcon} title={'People & user groups'} />
      <SidebarOption Icon={AppsIcon} title={'Apps'} />
      <SidebarOption Icon={FileCopyIcon} title={'File browser'} />
      <SidebarOption Icon={KeyboardArrowUpIcon} title={'Show less'} />
      <hr style={{opacity: 0.2}} />
      <SidebarOption addChannelOption title={'Add Channel'} />
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {
        channels?.docs.map((doc) => (
              <SidebarOption id={doc.id} key={doc.id} title ={doc.get('name')} />
            ))
      }

    </Box>
  )
}

export default Sidebar
