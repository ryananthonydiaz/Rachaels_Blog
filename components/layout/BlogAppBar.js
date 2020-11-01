import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DynamicFeedOutlinedIcon from '@material-ui/icons/DynamicFeedOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import List from '@material-ui/core/List';
import Treeview from '../treeview';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            text:'Meet Rachael',
            icon: <InfoOutlinedIcon />
          },
          {
            text: 'Closets',
            icon: <AllInboxOutlinedIcon />
          },
          {
            text: 'Pantries',
            icon: <MeetingRoomOutlinedIcon />
          },
          {
            text: 'Small Projects',
            icon: <BuildOutlinedIcon />
          },
          {
            text: 'Entire Rooms',
            icon: <HomeOutlinedIcon />
          }
        ].map(({ text, icon }) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <Treeview topic={text}  key={uuidv4()} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Rachael Anne
          </Typography>
        </Toolbar>
      </AppBar>

      <div>
        <>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </>

    </div>
    </div>
  );
}