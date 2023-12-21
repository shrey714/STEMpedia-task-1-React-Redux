const initialdata = ""

const taskreducer = (state = initialdata, action) => {
  switch (action.type) {
    case "ADDTEXT":
      const { data } = action.payload;
      return data;

    default:
      return state;
  }
};
export default taskreducer;
