export const fetchFrontImage = (MainImage) => async (dispatch) => {
  dispatch({ type: "FETCH_IMAGE", payload: MainImage });
};
export const fetchCourse = (Data) => async (dispatch) => {
  dispatch({ type: "FETCH_COURSE", payload: Data });
};
