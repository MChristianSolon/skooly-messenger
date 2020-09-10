import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { db } from './Firebase';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CreateModule() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [img, setImg] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <h2 id="simple-modal-title">Module Title</h2>
        <TextField value={title} onChange={handleTitleChange} />
        <h2 id="simple-modal-title">Module Description</h2>
        <TextField value={description} onChange={handleDescriptionChange} />
        <h2 id="simple-modal-title">Img/imgUrl</h2>
        <TextField value={img} onChange={handleImgUrlChange} />
        <br></br>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handleImgUrlChange(event) {
    setImg(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('OMGGG');
    db.collection('Modules').add({
      description,
      teacher: title,
      img,
    });
  }

  return (
    <div>
      <Typography onClick={handleOpen}>Create Module</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
