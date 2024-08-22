import React from 'react'
import { Box, Button, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Divider, ListSubheader } from '@mui/material';
import { useState } from 'react';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';

function Sidebar() {
    const [open, setOpen] = useState(false);
    const menuItems = [
      {
        itemLabel: 'Dashboard',
        itemIcon: <DashboardCustomizeTwoToneIcon/>
      }, 
      {
        itemLabel: 'Applcations',
        itemIcon: <PeopleAltTwoToneIcon/>
      }, 
      {
        itemLabel: 'Jobs',
        itemIcon: <WorkTwoToneIcon/>
      }, 
      {
        itemLabel: 'Account',
        itemIcon: <PersonOutlineTwoToneIcon/>
      }, 
      {
        itemLabel: 'Settings',
        itemIcon: <SettingsApplicationsTwoToneIcon/>
      }, 
    ]
  
    const toggleDrawer = (toggle) => () => {
      setOpen(toggle)
    }
  
    const DrawerList = (
      <Box sx={{ width: 250}}>
        <List subheader={
          <ListSubheader component='div'>
            Menu
          </ListSubheader>
        }>
          {menuItems.map((menuItem, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {menuItem.itemIcon}
                  </ListItemIcon>
                  <ListItemText primary={menuItem.itemLabel}/>
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
        <Divider/>
      </Box>
    )

  return (
    <div>
        <Button variant='contained' onClick={toggleDrawer(true)}>Open</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
        </Drawer>
    </div>
  )
}

export default Sidebar