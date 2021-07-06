import React, { useState } from 'react';
import { SketchField, Tools } from 'react-sketch';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CreateIcon from '@material-ui/icons/Create';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './styles.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SketchFieldComponent() {
  const [scratchPad, setScratchPad] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSolutions, setopenSolutions] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setScratchPad(true);
  };

  const handleClose = () => {
    setOpen(false);
    setScratchPad(false);
    setopenSolutions(false);
  };

  const handleOpenSolutions = () => {
    setOpen(true);
    setopenSolutions(true);
  };

  const modal = (type) => {
    return (
      <div>
        {/* <button type="button" onClick={handleOpen}>
                react-transition-group
            </button> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            {type === 'scratchPad' ? (
              <div
                className={classes.paper}
                className="sketchFieldComponent__modal">
                <div className="sketchFieldComponent__modal_title">
                  <h3>Scratchpad</h3>
                  <HighlightOffIcon onClick={() => handleClose()} />
                </div>
                <SketchField
                  width="80vw"
                  height="70vh"
                  tool={Tools.Pencil}
                  lineColor="black"
                  lineWidth={3}
                />
              </div>
            ) : type === 'submissions' ? (
              <div
                className={classes.paper}
                className="showSubmissions__container">
                <div className="sketchFieldComponent__modal_title">
                  <h3>Your Submissions</h3>
                  <HighlightOffIcon onClick={() => handleClose()} />
                </div>
                <div className="showSubmissions__images">
                  <p>submissions</p>
                </div>
              </div>
            ) : null}
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <div className="sketchFieldComponenet__container">
      <button
        onClick={handleOpen}
        className="sketchFieldComponenet__scratchPadBtn">
        White Board
      </button>
      <button
        onClick={handleOpenSolutions}
        className="sketchFieldComponenet__scratchPadBtn">
        Submissions
      </button>
      {scratchPad ? (
        <div>{modal('scratchPad')}</div>
      ) : openSolutions ? (
        <div>{modal('submissions')}</div>
      ) : null}
    </div>
  );
}

export default SketchFieldComponent;
