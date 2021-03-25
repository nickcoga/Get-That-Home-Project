const formReducer = (prevState, { type, payload }) => {
  const countries = {
    pj1: "Abel",
    pj2: "Juan Carlos",
    pj3: "Nick",
    pj4: "Christian",
  };
  switch (type) {
    case "CHANGE_FIELD":
      if (payload.name === "country") {
        return {
          ...prevState,
          [payload.name]: {
            name: countries[payload.value],
            code: payload.value,
          },
        };
      }
      return { ...prevState, [payload.name]: payload.value };
    default:
      throw new Error("Invalid action");
  }
};

export default formReducer;
