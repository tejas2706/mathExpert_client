import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './styles.css';
import HintAccordion from '../HintAccordion';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper1: {
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  crossBtn: {
    cursor: 'pointer',
  },
}));

function HintsModal({ hints, handleCloseHintsModal }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const modal = () => {
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
          onClose={handleCloseHintsModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            {
              <div className={classes.paper1} className="hintsModal__container">
                <div className="hints__modal_title">
                  <h3>Hints</h3>
                  <HighlightOffIcon
                    className={classes.crossBtn}
                    onClick={handleCloseHintsModal}
                  />
                </div>
                <div className="show__hints">
                  <HintAccordion hints={hints}></HintAccordion>
                </div>
              </div>
            }
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <div>
      <div className="hintsModal__container">{modal()}</div>
    </div>
  );
}

export default HintsModal;
