import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { LogContext } from './LogContext';
import { ImgUrlContext } from './ImgUrlContext';
import { db } from './Firebase';

function SingleContact({ module }) {
  const { log, setLog } = useContext(LogContext);
  const { setImgUrl } = useContext(ImgUrlContext);
  function handleClick() {
    setLog(`Messages:${module.data().teacher}`);
    db.collection(`Modules`).onSnapshot((snap) => {
      snap.docs.forEach((doc) => {
        if (doc.data().teacher === module.data().teacher) {
          setImgUrl(doc.data().img);
        }
      });
    });
  }
  return (
    <div>
      <ListItem button onClick={handleClick}>
        <Card className="singleContact-card">
          <CardHeader
            avatar={
              <Avatar
                alt={module.data().teacher}
                src="/static/images/avatar/1.jpg"
              />
            }
            title={module.data().teacher}
            titleTypographyProps={{ variant: 'body1', component: 'span' }}
          />
          <CardContent>
            <Typography>{module.data().description}</Typography>
          </CardContent>
        </Card>
      </ListItem>
    </div>
  );
}

export default SingleContact;
