import React, { useContext } from 'react';
import { ActivityContext } from './ActivityContext';
import './Activity.css';
import { Typography } from '@material-ui/core';
import TransferList from './TransferList';
import Courseoutline from './CourseOutline';
import Twister from './Twister.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Lesson2Modal from './Lesson2Modal';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
function Activity() {
  const { activity } = useContext(ActivityContext);
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="activity-row">
      {activity.title !== 'Public Speaking' ? (
        activity.title !== 'Calculus' ? (
          <>
            <Typography color="primary" variant="h2" className="activity-title">
              {activity.title}
            </Typography>
            <img src={activity.url} alt="activity Img" />
            <h2 style={{ textAlign: 'center' }}>
              Put Your {activity.content} here
            </h2>
            <TransferList />
          </>
        ) : (
          <div>
            <Typography color="primary" variant="h2" className="activity-title">
              {activity.title}
            </Typography>
            <img
              src={
                'https://lifethroughamathematicianseyes.files.wordpress.com/2019/10/best-calculus-textbooks.png?w=635'
              }
              alt="activity Img"
            />
            <h2>1.) f(x) = (d/dz)4x</h2>
            <Card variant="elevation">
              <CardContent>
                <InputLabel id="demo-simple-select-label">
                  Derivative
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  style={{ width: '50%' }}
                >
                  <MenuItem value={10}>4xdz</MenuItem>
                  <MenuItem value={20}>Does Not Exist</MenuItem>
                  <MenuItem value={30}>0</MenuItem>
                </Select>
              </CardContent>
            </Card>

            <h2>2.) f(x) = (d/dy)7x</h2>
            <Card variant="elevation">
              <CardContent>
                <InputLabel id="demo-simple-select-label">
                  Derivative
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  style={{ width: '50%' }}
                >
                  <MenuItem value={10}>4xdz</MenuItem>
                  <MenuItem value={20}>Does Not Exist</MenuItem>
                  <MenuItem value={30}>0</MenuItem>
                </Select>
              </CardContent>
            </Card>

            <Button color="primary" onClick={() => alert('2/2 You Aced it :)')}>
              Submit
            </Button>
          </div>
        )
      ) : (
        <div>
          <Typography color="primary" variant="h2" className="activity-title">
            {activity.title}
          </Typography>
          <img
            src={
              'https://cms-assets.tutsplus.com/uploads/users/988/posts/31255/image/What-is-public-speaking%20(1).jpg'
            }
            alt="activity Img"
          />
          <h2 style={{ textAlign: 'center' }}>Here's what You Need To Learn</h2>
          <Courseoutline />

          <Card variant="elevated">
            <CardContent>
              <p style={{ textAlign: 'left' }}>
                <Button variant="filled">
                  <h3>Activity Card 1: </h3>
                </Button>
                <br></br>
                <strong>
                  Loosen up You have earned an activity card! Tongue Twisters:
                </strong>
                <br></br>
                <hr></hr>a sequence of words or sounds, typically of an
                alliterative kind, that are difficult to pronounce quickly and
                correctly. Here’s the activity: Try to say these tongue twisters
                correctly as fast as possible! We’ll see how you compare with me
                and others enrolled on this module…Ready…start!
              </p>
              <img src={Twister} alt="Twister" />
            </CardContent>
          </Card>
          <hr></hr>

          <Card variant="elevated">
            <CardContent>
              <p>
                <h2>Lesson Card 2:</h2>
                What is public speaking? The process of speaking to a group of
                people in a structured, deliberate, manner intended to inform,
                influence, or entertain the listeners. Public speaking is a
                process, an act and an art of making a speech before an
                audience. It holds many practical benefits that go far beyond
                delivering a project presentation or holding a successful
                meeting. It is not enough to talk in front of a group of people
                to be a brilliant public speaker. Your goal should not be only
                limited with informing your audience or expressing your thoughts
                publically, but also to change emotions, actions and attitudes,
                and to leave your listeners moved by the words and touched by
                their meaning.” Resources:
                <ul>
                  <li>https://www.youtube.com/watch?v=Z9mB3GHWEZ0</li>
                  <li>https://www.youtube.com/watch?v=Bg_Q7KYWG1g</li>
                </ul>
              </p>
            </CardContent>
          </Card>
          <hr></hr>

          <Card variant="elevated">
            <CardContent>
              <Button variant="filled">
                <h2>
                  <Lesson2Modal />
                </h2>
              </Button>
              <p>
                Face in a mirror and introduce yourself. You may say your name,
                age, course or even your dreams. Be comfortable speaking and try
                to relax.
              </p>
            </CardContent>
          </Card>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      )}
    </div>
  );
}

export default Activity;
