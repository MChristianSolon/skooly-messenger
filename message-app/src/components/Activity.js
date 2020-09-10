import React, { useContext } from 'react';
import { ActivityContext } from './ActivityContext';
import './Activity.css';
import { Typography } from '@material-ui/core';
import TransferList from './TransferList';
function Activity() {
  const { activity } = useContext(ActivityContext);
  console.log(activity);
  return (
    <div>
      <Typography color="primary" variant="h2" className="activity-title">
        {activity.title}
      </Typography>
      <img src={activity.url} alt="activityImg" />
      <p>{activity.content} HHAHA</p>
      <TransferList />
    </div>
  );
}

export default Activity;
