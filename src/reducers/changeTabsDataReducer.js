const changeTabsDataReducer = (tabValue = { value: 0 }, action) => {
  let newTabValue;
  switch (action.type) {
    case "CHANGE_TAB_VALUE":
      newTabValue = { value: action.payload };

      break;

    default:
      newTabValue = tabValue;
      break;
  }
  return newTabValue;
};

export default changeTabsDataReducer;
