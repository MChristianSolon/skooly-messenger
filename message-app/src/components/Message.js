import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

function Message({ textContent, user }) {
  let chat = {};
  let chatCard = {};
  if (user === textContent.data().user) {
    chat = {
      background: '#4fc3f7',
    };
    chatCard = {
      marginLeft: 'auto',
      marginRight: '10px',
    };
  } else {
    chat = {
      background: '#bdbdbd',
    };
    chatCard = {
      position: 'relative',
    };
  }
  return (
    <Box m={2}>
      <Card className=" chat-cardContent" style={chatCard}>
        <div style={chat}>
          <CardHeader
            avatar={
              <Avatar
                alt={textContent.data().user}
                src="/static/images/avatar/1.jpg"
              />
            }
            title={textContent.data().user + ': ' + textContent.data().message}
            titleTypographyProps={{ variant: 'body1', component: 'span' }}
          ></CardHeader>
        </div>
      </Card>
    </Box>
  );
}

export default Message;
