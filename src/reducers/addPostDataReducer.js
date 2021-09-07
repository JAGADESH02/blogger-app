const addPostDataReducer = (postAdd = { data: [] }, action) => {
  let newPostAdd;
  switch (action.type) {
    case "ADD_POST":
      newPostAdd = {
        ...postAdd,
        data: [...postAdd.data, action.payload],
      };

      break;
    default:
      newPostAdd = postAdd;
      break;
  }
  return newPostAdd;
};

export default addPostDataReducer;
