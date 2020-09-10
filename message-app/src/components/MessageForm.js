import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { LogContext } from './LogContext';
import { db, timestamp } from './Firebase';
import TelegramIcon from '@material-ui/icons/Telegram';
import InputAdornment from '@material-ui/core/InputAdornment';
import './Log.css';
function MessageForm({ user }) {
  const [text, setText] = useState('');
  const { log } = useContext(LogContext);

  function handleChange(val) {
    setText(val.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    db.collection(`${log}`).add({
      message: text,
      user,
      time: timestamp(),
    });
    console.log('submitted');
    setText('');
    console.log(text);
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Enter Message"
          variant="filled"
          className="MessageField"
          value={text}
          onChange={handleChange}
          style={{ background: 'white' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TelegramIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
}

export default MessageForm;
