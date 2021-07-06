import _ from "lodash";

const selectedFields = (state = {}, action) => {
  switch (action.type) {
    case "SET_STD":
      state = { ...state, standard: action.payload.standard };
      break;
    case "SET_TOPIC_DETAILS":
      state = { ...state, topicDetails: { ...action.payload.details } };
      break;
    case "SET_SUBTOPIC":
      state = { ...state, subTopicName: action.payload.subTopicName };
      break;
    case "SET_QUESTIONS":
      state = { ...state, questions: action.payload.questions };
      break;
    default:
      break;
  }
  return state;
};

export default selectedFields;
