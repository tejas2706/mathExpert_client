import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles.css';
import classesAndExams from'./classesAndExams';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import service from '../../service/apiService';
import { Link } from 'react-router-dom';

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
  const [std, setstd] = useState('6');
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    service.get(`http://localhost:8000/api/v1/mathexp/contents/?standard=${std}`).then(({data})=>{
        setTopics(data.topics)
    })
  }, [std])

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
                                <div className="flip-card">
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
                    topics && topics.length?
                    topics.map((eachTopic, index)=>{
                        return(
                            <Link to={{
                                    pathname:`/topicDetails/${eachTopic._id}`
                                }}>
                            <div className={`content__eachTopic content__eachTopic_${index%4}`}>
                                <h3 className="content__eachTopic_title">{eachTopic.name}</h3>
                                {
                                    eachTopic.subTopics.map((each)=>{
                                        return(
                                            <div className="content_topic">
                                                <ArrowRightIcon /> &nbsp;{each.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            </Link>
                        )
                    }):null
                }

            </div>
        </div>
    </div>
  );
}
