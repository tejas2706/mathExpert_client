import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles.css';
import classesAndExams from'./classesAndExams';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Content() {
  const classes = useStyles();
  const [std, setstd] = useState(classesAndExams[0].class);

  const topics = {
    "Algebra":["Fractions", "Decimal Fractions", "Squares and Square Roots", "Average", "Indices", "Ration and Proportions",
                "Percentage", "Profit and loss", "SI and CI", "Time, speed and Distance", "SI and CI", "Time, speed and Distance"],
    "Geometry":["Angles", "Polygons", "Perimeter and area of different Shapes", "Volume and Surface Area", "Circles"],
    "Geome1try":["Angles", "Polygons", "Perimeter and area of different Shapes", "Volume and Surface Area", "Circles"],
    "Geome1tory":["Angles", "Polygons", "Perimeter and area of different Shapes", "Volume and Surface Area", "Circles"],
    "Geome1trpy":["Angles", "Polygons", "Perimeter and area of different Shapes", "Volume and Surface Area", "Circles"]
  }
  const handleChange = (event) => {
    setstd(event.target.value);
  };
  return (
    <div className="content__container">
        <div className="content__classDropDown">
            <div>Select Class</div>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">Class</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={std}
                onChange={handleChange}
                >
                {
                    classesAndExams.map((each)=>{
                        return(
                            <MenuItem value={each.class}>{each.class}</MenuItem>
                        )
                    })
                }
                </Select>
            </FormControl>
        </div>
        <div className="content__examsDisplay">
            <div className="content__selectClass">Exams for class {std}</div>
            <div className="content__line"></div>
            <div className="content__exams">
                {
                    classesAndExams.filter((each)=>each.class == std)[0]["examIds"].map((eachExam, index)=>{
                        return(
                            <div className={`content__eachExam content_examExam_${index}`}>
                                <div class="flip-card">
                                    {eachExam}
                                    {/* <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            {eachExam}
                                        </div>
                                        <div class="flip-card-back">
                                            Show exam details here..
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="content__topicTitle">Maths preparation for the above exams for class {std}</div>
            {/* <div className="content__line"></div> */}
            <div className="content__topics">
                {
                    Object.keys(topics).map((eachTopic, index)=>{
                        return(
                            <div className={`content__eachTopic content__eachTopic_${index%4}`}>
                                <h3 className="content__eachTopic_title">{eachTopic}</h3>
                                {
                                    topics[eachTopic].map((each)=>{
                                        return(
                                            <div className="content_topic">
                                                <ArrowRightIcon /> &nbsp;{each}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  );
}
