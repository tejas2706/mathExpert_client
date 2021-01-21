import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles.css';
import classesAndExams from'./classesAndExams';
import { RecentActorsSharp } from '@material-ui/icons';


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
  console.log("🚀 ~ file: index.js ~ line 26 ~ Content ~ std", classesAndExams.filter((each)=>each.class==std))

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
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            {eachExam}
                                        </div>
                                        <div class="flip-card-back">
                                            Show exam details here..
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  );
}
