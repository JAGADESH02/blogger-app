const getPostDataReducer = (
  postData = {
    success: false,
    fetching: false,
    fetched: false,
    responseStatus: null,
    data: null,
    dataPresent: false,
  },
  action
) => {
  let newPostdata;
  switch (action.type) {
    case "GET_POST_DATA_OVERVIEW":
      newPostdata = {
        ...postData,
        fetching: true,
        fetched: false,
      };
      break;
    case "GET_POST_DATA_OVERVIEW_FULFILLED":
      const dataPresent = action.payload.data.length > 0;
      newPostdata = {
        ...postData,
        success: true,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        dataPresent,
        responseStatus: action.payload.status,
      };

      break;
    case "GET_POST_DATA_FAILED":
      newPostdata = {
        ...postData,
        success: false,
        fetching: false,
        fetched: true,
        dataPresent: false,
        responseStatus: action.payload.status,
      };
      break;
    case "CLEAR_POST_DATA_OVERVIEW":
      newPostdata = {
        success: false,
        fetching: false,
        fetched: false,
        responseStatus: null,
        data: {},
        dataPresent: false,
      };
      break;
    default:
      newPostdata = postData;
      break;
  }
  return newPostdata;
};

export default getPostDataReducer;
