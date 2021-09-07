const likePostDataReducer = (
  likePost = { value: false, id: [], data: [] },
  action
) => {
  let newLikePost;
  switch (action.type) {
    case "LIKE_POST":
      newLikePost = {
        ...likePost,
        value: true,
        id: [...likePost.id, action.payload],
        data: [...likePost.data, action.data],
      };

      break;
    case "UNLIKE_POST":
      newLikePost = {
        ...likePost,
        value: false,
        id: likePost.id.filter((x) => x !== action.payload),
        data: likePost.data.filter((x) => x.id !== action.payload),
      };

      break;
    default:
      newLikePost = likePost;
      break;
  }
  return newLikePost;
};

export default likePostDataReducer;
