import React, { useEffect, useState, useContext } from 'react';
import Message from './Message';
import { db } from './Firebase';
import { LogContext } from './LogContext';

function MessageLog({ user }) {
  const { log } = useContext(LogContext);
  const [messages, setMessages] = useState([]);
  const audio = document.querySelector('.ding');
  function start() {
    //audio.play();
    console.log('ding');
  }

  useEffect(() => {
    db.collection(`${log}`)
      .orderBy('time')
      .onSnapshot((snap) => {
        setMessages(() => {
          let newArr = snap.docs.map((message) => {
            return (
              <Message key={message.id} textContent={message} user={user} />
            );
          });
          return newArr;
        });
      }, start());
  }, [log]);
  return <div style={{ width: '33.33vw' }}>{messages}</div>;
}

export default MessageLog;
