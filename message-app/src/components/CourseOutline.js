import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function CourseOutline() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="What is public speaking?" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Why do we need to study public speaking?" />
        </ListItem>
      </List>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Public speaking process" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Nonverbal Communication" />
        </ListItemLink>
      </List>
    </div>
  );
}
