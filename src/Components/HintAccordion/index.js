import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './styles.css';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '70.33%',
    flexShrink: 0,
  },
  // secondaryHeading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   color: theme.palette.text.secondary,
  // },
}));

export default function HintAccordion({ hints }) {
  console.log('🚀 ~ file: index.js ~ line 25 ~ HintAccordion ~ hints', hints);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {hints.length
        ? hints.map((each, index) => {
            let id = `Hint ${index + 1}`;
            let title = `Hint ${index + 1}`;
            let accordionMessage = each;
            if (_.isObject(each)) {
              id = each.id;
              title = `${each.title}`;
              accordionMessage = each.expandedText;
            }
            return (
              <div className="hintAccordion__eachAccordion">
                <Accordion
                  style={{
                    backgroundColor: '#141E30',
                    color: ' rgb(226, 226, 226)',
                  }}
                  expanded={expanded === id}
                  onChange={handleChange(id)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{
                       color: 'white',
                      }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography className={classes.heading}>{title}</Typography>
                    {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <b>{accordionMessage}</b>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })
        : null}
    </div>
  );
}
