import React, { useState, useMemo } from 'react';
import Contacts from './Contacts';
import Activity from './Activity';
import Log from './Log';
import { ActivityContext } from './ActivityContext';
import { LogContext } from './LogContext';
import { ImgUrlContext } from './ImgUrlContext';
import Grid from '@material-ui/core/Grid';
import Demo from './Demo';

function ChatApp({ user }) {
  const [activity, setActivity] = useState({
    title: 'Activity',
    content: 'content',
    url:
      'https://www.brainfacts.org/-/media/Brainfacts2/Icons-3,-d-,0/Activity_Icon.png',
  });
  const activityProviderValue = useMemo(() => ({ activity, setActivity }), [
    activity,
    setActivity,
  ]);
  const [log, setLog] = useState('Messsages');
  const logProviderValue = useMemo(() => ({ log, setLog }), [log, setLog]);

  const [imgUrl, setImgUrl] = useState('Messsages');
  const imgUrlProviderValue = useMemo(() => ({ imgUrl, setImgUrl }), [
    imgUrl,
    setImgUrl,
  ]);
  return (
    <div>
      <ActivityContext.Provider value={activityProviderValue}>
        <LogContext.Provider value={logProviderValue}>
          <ImgUrlContext.Provider value={imgUrlProviderValue}>
            <Demo />
            <Grid container>
              <Grid item xs={4}>
                <Contacts />
              </Grid>
              <Grid item xs={4}>
                <Log user={user} />
              </Grid>
              <Grid item xs={4}>
                <Activity />
              </Grid>
            </Grid>
          </ImgUrlContext.Provider>
        </LogContext.Provider>
      </ActivityContext.Provider>
    </div>
  );
}

export default ChatApp;
