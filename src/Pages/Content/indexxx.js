import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classesAndExams from './classesAndExams';

const useStyles = makeStyles((theme) => ({
    contentRoot: {
        width: '80%',
        paddingTop: '40px',
    },
    contentHeading: {
        fontSize: theme.typography.pxToRem(25),
        flexBasis: '30%',
        flexShrink: 0,
        minWidth: '200px',
        border: '1px olid gray',
    },
    contentAccordian: {
        background: 'linear-gradient(to left, #f6fbff, #ebf2ff)',
    },
    contentTypo: {
        width: '100%',
    },
}));

function Content() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="Content__container">
            <div className={classes.contentRoot}>
                {classesAndExams.map((eachClass, index) => {
                    return (
                        <div className="contentAccordion__eachAccordion">
                            <Accordion
                                className={classes.contentAccordian}
                                expanded={expanded === eachClass.id}
                                onChange={handleChange(eachClass.id)}>
                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon
                                            style={{ color: 'black' }}
                                        />
                                    }
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header">
                                    <Typography
                                        className={classes.contentHeading}>
                                        Class {eachClass.class}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className={classes.contentTypo}>
                                        <div className="content__exams">
                                            {eachClass.examIds.map(
                                                (eachExam) => {
                                                    return (
                                                        <div className="content__eachExam">
                                                            {eachExam}
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Content;
