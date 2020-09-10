import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SingleContact from './SingleContact';
import List from '@material-ui/core/List';
import { db } from './Firebase';
import './Contacts.css';

function Contacts() {
  const [modules, setModules] = useState([]);
  useEffect(() => {
    db.collection('Modules').onSnapshot((snap) => {
      setModules(() => {
        return snap.docs.map((mod) => {
          return <SingleContact key={mod.id} module={mod} />;
        });
      });
    });
  }, []);
  return (
    <div className="contacts-row">
      <Card variant="outlined">
        <CardContent>
          <List>{modules}</List>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contacts;
