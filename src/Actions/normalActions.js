export function clearPostData(dispatch) {
  return { type: "CLEAR_POST_DATA_OVERVIEW" };
}

export function changeTabValue(event, value) {
  return { type: "CHANGE_TAB_VALUE", payload: value };
}

export function AddPostData(data) {
  return { type: "ADD_POST", payload: data };
}

export function LikePost(id, data) {
  return { type: "LIKE_POST", payload: id, data: data };
}

export function UnlikePost(id, data) {
  return { type: "UNLIKE_POST", payload: id, data: data };
}

export function ArchivePost(id, data) {
  return { type: "ARCHIVE_POST", payload: id, data: data };
}

export function UnarchivePost(id, data) {
  return { type: "UNARCHIVE_POST", payload: id, data: data };
}
