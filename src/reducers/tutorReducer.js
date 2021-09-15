const initState = {
  tutor: {},
};

const tutorReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_TUTORS":
      return {
        ...state,
        tutor: action.payload.tutor,
      };
    default:
      return { ...state };
  }
};

export default tutorReducer;
