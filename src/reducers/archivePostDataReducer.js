const archivePostDataReducer = (
    archivePost = { value: false, id: [], data: [] },
    action
  ) => {
    let newArchivePost;
    switch (action.type) {
      case "ARCHIVE_POST":
        newArchivePost = {
          ...archivePost,
          value: true,
          id: [...archivePost.id, action.payload],
          data: [...archivePost.data, action.data],
        };
  
        break;
      case "UNARCHIVE_POST":
        newArchivePost = {
          ...archivePost,
          value: false,
          id: archivePost.id.filter((x) => x !== action.payload),
          data: archivePost.data.filter((x) => x.id !== action.payload),
        };
  
        break;
      default:
        newArchivePost = archivePost;
        break;
    }
    return newArchivePost;
  };
  
  export default archivePostDataReducer;
  