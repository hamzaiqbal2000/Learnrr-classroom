import axios from "axios";
import { tutor_users_URL } from "../api";

export const loadTutors = () => async (dispatch) => {
  const tutorData = await axios.get(tutor_users_URL());
  dispatch({
    type: "FETCH_TUTORS",
    payload: {
      tutor: tutorData.data,
    },
  });
};
