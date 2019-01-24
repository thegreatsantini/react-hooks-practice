export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [action.payload.formData, ...state];
    case "remove":
      return state.filter((val, i) => i !== action.payload.index);
    case "update":
      const { currentTime } = action.payload;
      return state.map((val, i) => {
        if (action.payload.index === i) {
          return {
            ...val,
            time: currentTime
          };
        } else {
          return val;
        }
      });
    case "edit":
      return state.map((val, i) => {
        if (action.payload.index === i) {
          return action.payload.formData;
        } else {
          return val;
        }
      });
    default:
      return state;
  }
};
