import React, { useContext } from 'react';
import { ActivityContext } from './ActivityContext';
import MessageLog from './MessageLog';
import MessageForm from './MessageForm';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MediaCard from './MediaCard';
import './Log.css';

function Log({ user }) {
  const { activity, setActivity } = useContext(ActivityContext);

  return (
    <div>
      <Card variant="outlined" className="CardRow ">
        <CardContent className="LogRow">
          <MediaCard />
          <MessageLog user={user} />
        </CardContent>
        <MessageForm user={user} />
      </Card>
    </div>
  );
}

export default Log;
